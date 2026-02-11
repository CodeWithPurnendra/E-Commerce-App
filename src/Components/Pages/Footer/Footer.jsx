import "./Footer.css";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { BsShop } from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
     
        <div className="footer-brand">
          <div className="footer-logo">
            <BsShop />
            <span>MiniMart</span>
          </div>
          <p>
            MiniMart is your go-to destination for quality products, great
            prices, and a smooth shopping experience.
          </p>
        </div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/contact">Contact</a>
          <a href="/signup">Sign Up</a>
        </div>

        <div className="footer-social">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://instagram.com/purnendranishad18" aria-label="Instagram" target="_blank">
              <AiOutlineInstagram />
            </a>
            <a href="https://github.com/CodeWithPurnendra" aria-label="GitHub" target="_blank">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MiniMart. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
