import { useEffect, useState } from "react"

export default function UserListcyc(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");


    const fetchData = () =>{
        const id= setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response);
                if(response.ok){
                    return response.json();
                }
                throw new Error("Network response was not ok");
            })
            .then(data => {
                setData(data); // verileri kaydet
                setLoading(false); // yüklenme durumunu durdur ki kendini sürekli çalıştırmasın
            })
            .catch(error => {
                setError(error); // Hata durumunu ayarla
                setLoading(false); // Yüklenme durumu kapat
            })
        }, 2000);
    }

    useEffect(() =>{
        fetchData();
    }, [])

   const filteredUsers = data.filter(user => {
        return user.name.toLowerCase().includes(search.toLowerCase());
   })

    if(loading){
        return <p>Loading...</p>
    }

    if (error) {
        return (
          <div>
            <p>Hata oluştu: {error}</p>
            <button onClick={fetchData}>Tekrar Dene</button> {/* eğer hata varsa ve butona tıklandığında fetch tekrar yüklenir yani useEffectin içine girer */} 
          </div>
        );
      }
    return(
        <div>
            <h1>User List</h1>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
            <ul>
            {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))
            ) : (
              <li>Hiçbir kullanıcı bulunamadı.</li> // Kullanıcı yoksa gösterilecek
            )}
            </ul>

        </div>
    )
}