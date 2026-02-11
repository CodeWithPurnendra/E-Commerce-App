import "./CartItem.css";
import { useCart } from "../../../CartContext/CartContext";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
function CartItem({ product, index }) {
  const { removeFromCart, updateQuantity } = useCart();
  const quantity = product.quantity || 1;

  return (
    <div className="cartItems-container">
      <div className="cart-items-page">
        <img
          className="item-image"
          src={product.thumbnail}
          alt={product.title}
        />

        <div className="cart-items-details">
          <h2 className="cart-item-name">{product.title}</h2>
          <p className="cart-item-price">${product.price}</p>
        </div>

        <div className="cart-items-quantity">
          <button
            className="qty-btn"
            onClick={() =>
              quantity > 1 && updateQuantity(index, quantity - 1)
            }
          >
            <FiMinus />
          </button>

          <span className="qty-value">{quantity}</span>

          <button
            className="qty-btn"
            onClick={() => updateQuantity(index, quantity + 1)}
          >
            <FiPlus />
          </button>
        </div>

        <button
          className="remove-btn"
          onClick={() => removeFromCart(index)}
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
