import { Link, useNavigate } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
import useAuth from "../Hooks/useAuth";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { useCart } from "../context/cartContext";

const logo = new URL("../img/namstefood.png", import.meta.url).href;
const offlineImage = new URL("../img/offline.png", import.meta.url).href;
const usericon = new URL("../img/usericon.png", import.meta.url).href;

const Title = () => (
  <Link to="/">
    <img
      className="logo"
      src={logo}
      alt="Namste Food"
      title="Namste Food"
    />
  </Link>
);

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const navigate = useNavigate();
  const { cartItems } = useCart();

  const [getLocalStorage, , clearLocalStorage] =
    useLocalStorage("user");

  const [isLoggedin, setIsLoggedin] = useAuth();

  useEffect(() => {
    if (getLocalStorage === null) {
      setIsLoggedin(false);
    }
  }, [getLocalStorage]);

  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />

      {/* Show username only when logged in */}
      {isLoggedin && (
        <div className="user-name">
          Hi {getLocalStorage?.userName}!
        </div>
      )}

      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/cart" className="cart-link">
              <i className="fa-solid fa-cart-shopping"></i>

              {cartItems.length > 0 && (
                <span className="cart-count">
                  {cartItems.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )}
                </span>
              )}
            </Link>
          </li>

          {/* User Icon */}
          <li className="user-menu-container">
            <button
              className="user-icon-btn"
              onClick={() =>
                setShowUserMenu(!showUserMenu)
              }
            >
              {isOnline ? (
                <img
                  src={usericon}
                  alt="User"
                  className="user-icon"
                />
              ) : (
                <img
                  src={offlineImage}
                  alt="Offline"
                  className="user-icon"
                />
              )}
            </button>

            {/* Dropdown */}
            {showUserMenu && (
              <div className="user-dropdown">

                {/* Logout */}
                <button
                  onClick={() => {
                    clearLocalStorage();
                    setIsLoggedin(false);
                    setShowUserMenu(false);

                    navigate("/login", {
                      state: { loggedOut: true }
                    });
                  }}
                >
                  Logout
                </button>

                {/* Settings */}
                <button>
                  Settings
                </button>

                {/* Help */}
                <button>
                  Help
                </button>

              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;