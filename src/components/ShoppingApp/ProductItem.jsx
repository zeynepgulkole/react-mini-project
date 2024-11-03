// Tek bir ürünü gösteren bileşen. Kullanıcı bu bileşenden ürünü sepete ekleyebilecek.

export default function ProductItem({product, addToCart}) {
    return(
        <div>
            <div className="product-box">
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    )
}