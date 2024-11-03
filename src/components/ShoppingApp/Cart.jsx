// Sepetteki ürünleri ve toplam fiyatı görüntüleyen bileşen.

import CartItem from "./CartItem";

export default function Cart({cartItems, removeFromCart, calculateTotal}){
    return(
        <div>
            <h1>Cart</h1>
           {cartItems.map((item) => (
            <CartItem item={item} removeFromCart={removeFromCart} calculateTotal={calculateTotal}/>
           ))}
        </div>
    )
}