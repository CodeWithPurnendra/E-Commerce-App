import { Link } from "react-router-dom";
import "./NavBar.css";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";
import { useCart } from "../../CartContext/CartContext";

function NavBar({ navbar }) {
  const { cart } = useCart();
  return (
    <header className="nav-container">
      <div className="logo-box">
        <BsBagCheckFill className="logo-icon" />
        <span className="logo-text">MiniMart</span>
      </div>

      <nav className="nav-content">
        <ul className="nav-links">
          {navbar.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>{item.realName}</Link>
            </li>
          ))}
        </ul>
        <div className="search-box">
          <AiOutlineSearch className="search-icon" />
          <input
            type="search"
            placeholder="What are you looking for..."
            className="search"
          />
        </div>
        <div className="nav-icons">
          <AiOutlineHeart className="icon" title="Favorites" />
          <Link
            to="/cart"
            style={{ position: "relative", textDecoration: "none" }}
          >
            <AiOutlineShoppingCart className="icon" title="Cart" />
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
