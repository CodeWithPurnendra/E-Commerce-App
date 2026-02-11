import ProductList from "../../Product/ProductList";
import Footer from "../Footer/footer";
import "./Products.css";
function Products() {
  return (
    <div className="products-page-wrapper">
      <main className="products-content">
        <section className="product-page">
          <h1>All Products</h1>
          <p>Browse our amazing products</p>
        </section>
        <ProductList showAddToCart={true} />
      </main>
      <Footer />
    </div>
  );
}

export default Products;
