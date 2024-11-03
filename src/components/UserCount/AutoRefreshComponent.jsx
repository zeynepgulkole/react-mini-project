import { useEffect, useState } from "react";
import ProductCartCount from "./ProductCart";
import "./style.css";


export default function AutoRefreshComponent() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]); // Ürünleri saklar
  const [randomProducts, setRandomProducts] = useState([]); // Rastgele seçilen 5 ürün
  const [autoRefresh, setAutoRefresh] = useState(false); // Otomatik yenilemeyi kontrol eder

  // API'den veri çeken fonksiyon
  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products); // API'den gelen ürünleri kaydet (products key'i altında)
        setRandomProducts(getRandomProducts(data.products, 5)); // İlk başta rastgele 5 ürün seç
        console.log(data.products);
        
        setCount((prevCount) => prevCount + 1);
      })
      .catch((error) => console.log("Veri alınırken hata oluştu", error));
  };

  // Rastgele 5 ürün seçen fonksiyon
  const getRandomProducts = (productsArray, numberOfProducts) => {
    let shuffled = [...productsArray].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numberOfProducts); // Sadece ilk 5 ürünü al
  };

  // useEffect ile otomatik yenileme mekanizması
  useEffect(() => {
    let interval;
    if (autoRefresh) {
      interval = setInterval(() => {
        fetchData();
        setRandomProducts(getRandomProducts(products, 5)); // Her 2 saniyede rastgele ürünleri güncelle
      }, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRefresh, products]); // autoRefresh veya products değiştiğinde çalışır



  return (
    <div>
      <h1>Ürünler</h1>
      <button onClick={() => setAutoRefresh(!autoRefresh)}>
        {autoRefresh ? "Otomatik Yenilemeyi Durdur" : "Otomatik Yenilemeyi Başlat"}
      </button>
      <h2>API çağrısı {count} kez yapıldı</h2>

      <div className="product-container">
        {randomProducts.map((product) => (
          <ProductCartCount key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
