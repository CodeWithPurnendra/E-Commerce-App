import Footer from "../Footer/footer";
import "./About.css";
import { HiOutlineUsers, HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlinePayments } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { FiTruck, FiShield, FiStar } from "react-icons/fi";

function About() {
  return (
    <div className="about-container">
      <section className="about-page">
        <h1>About MiniMart</h1>
        <p>Welcome to MiniMart, your trusted online shopping destination!</p>
        <p>
          We are committed to providing you with the best products at
          competitive prices. Our mission is to make online shopping easy,
          convenient, and enjoyable.
        </p>
      </section>
      <section className="about-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <HiOutlineUsers />
          </div>
          <h3>10.5k</h3>
          <p>Sellers active on our site</p>
        </div>

        <div className="stat-card highlight">
          <div className="stat-icon">
            <MdOutlinePayments />
          </div>
          <h3>33k</h3>
          <p>Monthly Product Sale</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <BsShop />
          </div>
          <h3>45.5k</h3>
          <p>Customers active on our site</p>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <HiOutlineShoppingBag />
          </div>
          <h3>25k</h3>
          <p>Annual gross sale on our site</p>
        </div>
      </section>

      <section className="about-features">
        <div className="feature">
          <div className="feature-icon">
            <FiTruck />
          </div>
          <h2>Fast Delivery</h2>
          <p>Get your orders delivered quickly and on time</p>
        </div>

        <div className="feature">
          <div className="feature-icon">
            <FiShield />
          </div>
          <h2>Secure Payment</h2>
          <p>Safe and encrypted payment transactions</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <FiStar />
          </div>
          <h2>Quality Products</h2>
          <p>Only the best and trusted products for customers</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default About;
