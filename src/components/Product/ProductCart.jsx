export default function ProductCart({product, stock}){
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
            <h3>{product.title}</h3>
            <h3>{product.price}</h3>
            <p style={{ color: stock > 20 ? "green" : "red" }}>
        {stock > 20 ? "In Stock" : "Stoklar azalıyor"}
      </p>
      <p>Stock: {stock}</p>
        </div>
    )

}