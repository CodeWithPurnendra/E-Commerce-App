import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/Navbar";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Products from "./Components/Pages/Products/Products";
import Contact from "./Components/Pages/Contact/Contact";
import SignUp from "./Components/Pages/SignUp/SignUp";
import { CartProvider } from "./CartContext/CartContext";
import Cart from "./Components/Cart/Cart";
function App() {
  const navbar = [
    { id: 1, path: "/", realName: "Home" },
    { id: 2, path: "/about", realName: "About" },
    { id: 3, path: "/products", realName: "Products" },
    { id: 4, path: "/contact", realName: "Contact" },
    { id: 5, path: "/signUp", realName: "Sign Up" },
  ];

  return (
    <CartProvider>
    <div>
      <NavBar navbar={navbar}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
