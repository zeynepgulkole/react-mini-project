export default function CartItem({item, removeFromCart, calculateTotal}) {
    return (
        <div>
        <h3>{item.name}</h3>
        <p>Fiyat: {item.price} TL x {item.quantity}</p>
        <button onClick={() => removeFromCart(item.id)}>Sepetten Çıkar</button>
      </div>
    )
}