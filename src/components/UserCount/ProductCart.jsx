import './style.css';
export default function ProductCartCount({product}) {
    return(
        <div>
            <div className="product-cart">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <p>{product.price}</p>
                </div>
        </div>
    )
}