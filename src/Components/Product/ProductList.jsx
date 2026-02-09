import { useState, useEffect } from "react";
import "./Product.css";
import ProductCard from "./ProductCard";
import { fetchAllProducts } from "../Survices/ProductService";

function ProductList() {
  const [products, setProducts] = useState([]);
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

  return (
    <section className="product-container">
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
