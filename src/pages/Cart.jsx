import React from "react";
import { useCartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
// import { useAuth0 } from "@auth0/auth0-react";

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();

  // const { isAuthenticated, user } = useAuth0();

  if(cart.length === 0 ){
    return (
      <div className="emptyCart">
        <h3>No Item In Cart</h3>
      </div>
    )
    
  }

  return (
    <section className="padding-100">
      <div className="container">
        {/* {isAuthenticated && <div className="cart-user-profile">
            <img src={user.picture} alt={user.name} className="img-fluid" />
            <h2 className="user-name-cart">{user.name}</h2>
        </div>
        } */}
        {/* <h1 class="theme-main-heading text-center mb-5">Your Cart</h1> */}
        <div className="row">
          <div className="col">
            <p>Item</p>
          </div>
          <div className="col">
            <p className="cart-hide">Price</p>
          </div>
          <div className="col">
            <p>Quantity</p>
          </div>
          <div className="col">
            <p>Subtotal</p>
          </div>
          <div className="col">
            <p>Remove</p>
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="col-md-12">
            {cart.map((curElem) => {
              return <CartItem key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
        <hr />

        {/* cart two buttons */}

        <div className="row">
          <div className="col-md-6">
            <NavLink to="/products">
              <button className="theme-btn">Continue Shopping</button>
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-end">
              <button onClick={clearCart} className="theme-btn red-btn">Clear Cart</button>
          </div>
        </div>

        {/* order total amount */}
        <div className="row cart-total mt-5">
          <div className="col-md-3">
            <p><b>Subtotal:</b> <FormatPrice price={total_price}/></p>
            <p><b>Shipping Fee:</b> <FormatPrice price={shipping_fee}/></p>
            <hr />
            <p><b>Total Orders:</b> <FormatPrice price={shipping_fee + total_price}/></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
