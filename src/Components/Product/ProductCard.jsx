 import "./Product.css"
 import { formatPrice} from "../Utils/formatPrice";
 function ProductCard({product}){
    if (!product) {
        return null;
    }
   return(
    <section className="product-card-container">
        <div className="product-cards">
         <img src={product.thumbnail} alt={product.title}/>
         <h3>{product.title}</h3>
         <p>{product.description}</p>
         <span className="price">{formatPrice(product.price)}</span>
         {product.discountPercentage && (
            <span className="discount">-{product.discountPercentage}%</span>
         )}
         <button className="btn">Add to card</button>
        </div>
    </section>
   )
 }

 export default ProductCard;