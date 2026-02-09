import { Link } from "react-router-dom";
import "./NavBar.css";
import {AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch,} from "react-icons/ai";
import { BsBagCheckFill } from "react-icons/bs";

function NavBar({ navbar}) {
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
          <AiOutlineShoppingCart className="icon" title="Cart" />
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
