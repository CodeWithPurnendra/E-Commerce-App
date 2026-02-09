import ProductList from "../../Product/ProductList";
import Footer from "../Footer/footer";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <section className="herosection">
        <h1>Welcome to MiniMart</h1>
        <p>Your one-stop shop for amazing products!</p>
      </section>
      <ProductList />
      <Footer/>
    </div>
  );
}

export default Home;
