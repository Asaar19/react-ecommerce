import { useState } from "react";
// import { FaCheck } from "react-icons/fa";
import CartAmountToggle from "./CartAmountToggle";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";

const AddToCart = ({ product }) => {
  const {addToCart} = useCartContext();
  const { id, colors, stock } = product;
  const [color, setColor] = useState(colors[0]);

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(1);
  };

  return (
    <section className="singlePage">
      <div className="colors">
        <p>
          Colors:
          {colors.map((curColor, index) => {
            return (
              <button
                key={index}
                style={{ backgroundColor: curColor }}
                className={color === curColor ? "btnStyle active" : "btnStyle"}
                onClick={() => setColor(curColor)}
              >
                {color === curColor ? "✓" : null}
              </button>
            );
          })}
        </p>
      </div>

      {/* add to cart */}

      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <NavLink to="/cart" onClick={() => addToCart(id, color, amount, product)}>
        <button className="theme-btn">Add to Cart</button>
      </NavLink>

     
    </section>
  );
};

export default AddToCart;
