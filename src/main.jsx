import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context/ProductContext.jsx";
import { FilterContextProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext.jsx";
import { Auth0Provider } from "@auth0/auth0-react"; 

// const domain = process.env.REACT_APP_AUTH_DOMAIN;
// const clienID = process.env.REACT_APP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  

  <Auth0Provider
    domain= "dev-oyl1vlwqzjizbupk.us.auth0.com"
    clientId= "Fxw6tsjEgEacWroWe4EdUcqybn3IqmMw"
    authorizationParams={{
      redirect_uri: window.location.origin 
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);
