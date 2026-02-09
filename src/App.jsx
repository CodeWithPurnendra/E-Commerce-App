import NavBar from "./Components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Footer from "./Components/Pages/Footer/footer";
function App() {
  const navbar = [
    { id: 1, path: "/", realName: "Home" },
    { id: 2, path: "/about", realName: "About" },
    { id: 3, path: "/products", realName: "Products" },
    { id: 4, path: "/contact", realName: "Contact" },
    { id: 5, path: "/signUp", realName: "Sign Up" },
  ];
  return (
    <div>
      <NavBar navbar={navbar} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
