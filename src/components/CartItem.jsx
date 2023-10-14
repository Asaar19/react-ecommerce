import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartContext } from "../context/CartContext";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeCartItem, setIncrease, setDecrease } = useCartContext();

  // const setDecrease = () => {};
  // const setIncrease = () => {};

  return (
    <section className="mb-3">
      <div className="container">
        <div className="row cartItem-row">
          <div className="col">
            <div className="d-flex">
              <div className="cart-img">
                <figure>
                  <img src={image} alt={id} className="img-fluid" />
                </figure>
              </div>
              <div className="cart-first-col">
                <p className="cart-product-name">{name}</p>
                <div className="cart-color-div d-flex">
                  <p>Color:</p>
                  <button
                    className="selectColor"
                    style={{ backgroundColor: color }}
                  ></button>
                </div>
              </div>
            </div>
          </div>

          {/* Price */}

          <div className="col">
            <div className="cart-hide">
              <p>
                <FormatPrice price={price} />
              </p>
            </div>
          </div>

          {/* quantity */}

          <div className="col">
            <div className="cart-quantity">
              <CartAmountToggle
                amount={amount}
                setDecrease={() => setDecrease(id)}
                setIncrease={() => setIncrease(id)}
              />
            </div>
          </div>

          {/* subtotal */}

          <div className="col">
            <div className="cart-hide">
              <p>
                <FormatPrice price={price * amount} />
              </p>
            </div>
          </div>

          {/* trash */}

          <div className="col">
            <div>
              <DeleteIcon onClick={() => removeCartItem(id)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItem;
