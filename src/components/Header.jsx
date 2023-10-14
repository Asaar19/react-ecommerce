import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../context/CartContext";
import { useAuth0 } from "@auth0/auth0-react";
import Breadcrumbs from "./Breadcrumbs";
import { useLocation } from 'react-router-dom';


const Header = () => {
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

    const Homelocation = useLocation();

    const isHomePage = location.pathname === '/';


  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/" className="logo">
                iStore.
              </Link>

              <Navbar />

              <div className="rightNav">
                {isAuthenticated && (
                  <div>
                    {/* <img src={user.picture} alt={user.name} /> */}
                    <h2 className="user-name">
                      Logged in as <b>{user.name}</b>
                    </h2>
                    {/* <p>{user.email}</p> */}
                  </div>
                )}

                {isAuthenticated ? (
                  <button
                    className="theme-btn"
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    Log Out
                  </button>
                ) : (
                  <button
                    className="theme-btn"
                    onClick={() => loginWithRedirect()}
                  >
                    Log In
                  </button>
                )}

                {/* <Link to="/contact" className="theme-btn">
                  Login
                </Link> */}
                <Link to="/cart" className="cart">
                  <ShoppingCartIcon />
                  <span>{total_item}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isHomePage ? null : (
        <section className="padding-100 breadcrumbs-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <Breadcrumbs />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Header;
