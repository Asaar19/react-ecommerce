import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () =>{
  let newCartData =  localStorage.getItem("myCart");

  if(newCartData == []){
    return [];
  }else{
    return JSON.parse(newCartData);
  }
}

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // increment and decrement the product

  // const setDecrease = (id) =>{
  //   dispatch({type: "SET_DECREMENT", payload: id})
  // }

  // const setIncrease = (id) =>{
  //   dispatch({type: "SET_INCREMENT", payload: id})
  // }

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  }
  

  // to remove the individual cart 

  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_CART_ITEM", payload: id });
  };

  // to clear the cart

  const clearCart = () =>{
    dispatch({type: "CLEAR_CART"});
  }


  // to add the data in localStorage

  useEffect(()=>{
    // dispatch({type: "CART_TOTAL_ITEM"});
    // dispatch({type: "CART_TOTAL_PRICE"});
    dispatch({type: "CART_ITEM_PRICE_TOTAL"})
    localStorage.setItem("myCart", JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeCartItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
