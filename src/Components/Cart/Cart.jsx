import "./Cart.css";
import { useCart } from "../../CartContext/CartContext";
import CartItem from "../Cart/CartItem/CartItem";
import Footer from "../Pages/Footer/footer";

function Cart() {
  const { cart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-layout">
      <div className="cart-page">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
            <a href="/products">Continue Shopping</a>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-item">
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  product={item}
                  index={index}
                />
              ))}
            </div>

            <div className="cart-summary">
              <h2>Cart Summary</h2>
              <p>Total Items: {cart.length}</p>
              <h3>Total: ${total.toFixed(2)}</h3>
              <button className="checkout-btn">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
