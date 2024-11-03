import { useEffect, useState } from "react"
import ProductList from "./ProductList";
import Cart from "./Cart";

export default function ShoppingApp(){

    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);


    const fetchProducts = () =>{
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setProducts(data)
        })
        .catch(error => console.log(error))
    }

    const fetchCartItems = () => {
        fetch('')
        .then(response => response.json())
        .then(data => {
            setCartItems(data)
            console.log(data);
        })
        .catch(error => console.log(error));
       
    }
    useEffect(() => {
        fetchProducts();
        fetchCartItems();
        const storedCartItems = localStorage.getItem('cartItems');
        if(storedCartItems){
            setCartItems(JSON.parse(storedCartItems));
        }
    },[])


    const addToCart = (product) => {
        const newCartItems = [...cartItems, product];
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    const removeFromCart = (id) => {
        const newCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(newCartItems);
        localStorage.setItem('cartItems', JSON.stringify(newCartItems));
    }

    const calculateTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.price, 0);

    }


return(
    <div>
        selam
        <ProductList products={products} addToCart={addToCart}/>
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} calculateTotal={calculateTotal}/>
    </div>
      )
}