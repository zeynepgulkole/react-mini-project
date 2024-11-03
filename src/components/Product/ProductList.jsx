import { useEffect, useState } from "react";
import ProductCart from "./ProductCart";

export default function ProductList(){

    const [product, setProduct] = useState([]);

    useEffect(() =>{
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(data => {
            setProduct(data.products);
            console.log(data.products);
        })
        .catch(error =>{
            console.log(error);
        })
    },[])
    return(
        <div>
            <h1>Product List</h1>
            <ul>
                {product.map(product =>(
                    <ProductCart key={product.id} stock={product.stock} product={product}/>
                ))}
            </ul>
        </div>
    )
}