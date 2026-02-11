import { createContext, useState, useContext } from "react";

const CartContext = createContext();
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  function addToCart(product) {
    setCart([...cart, product]);
  }
  function removeFromCart(index) {
    setCart(cart.filter((_, i) => i !== index));
  }

  function updateQuantity(index, newQty) {
    const newCart = [...cart];
    newCart[index] = { ...newCart[index], quantity: newQty };
    setCart(newCart);
  }

  function addToCart(product) {
    const existing = cart.findIndex((index) => index.id === product.id);
    if (existing >= 0) {
      const newCart = [...cart];
      newCart[existing].quantity = (newCart[existing].quantity || 1) + 1;
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
