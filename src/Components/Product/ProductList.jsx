import { useState, useEffect } from "react";
import "./Product.css";
import ProductCard from "./ProductCard";
import { fetchAllProducts } from "../Survices/ProductService";
function ProductList({  showAddToCart }) {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="spinner-container">
        <div className="spinner"></div>
      </section>
    );
  }

  const showMoreHandler = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section className="product-container">
      <div className="product-list">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} showAddToCart={showAddToCart}/>
        ))}
      </div>

      {visibleCount < products.length && (
        <div className="show-more-container">
          <button className="show-more-btn" onClick={showMoreHandler}>
            Show More
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductList;
