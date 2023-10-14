import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-btn">
      <div className="amount-toggle">
        <button
          onClick={() => {
            setDecrease();
          }}
        >
          <RemoveIcon />
        </button>
        <p className="amount-style">{amount}</p>
        <button
          onClick={() => {
            setIncrease();
          }}
        >
          <AddIcon />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;

