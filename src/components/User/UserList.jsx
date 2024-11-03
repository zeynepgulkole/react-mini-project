import { useEffect, useState } from "react";
import UserCart from "./UserCart";

export default function UserList(){

    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data);
            console.log(data);
        })
        .catch(error =>{
            console.log(error);
        })
    },[])

  const toggleFollow = (id) =>{
    setUsers(
      users.map(user => {
        if(user.id === id){
          return {...user, followed: !user.followed}
        }
        return user;
      })
    )
  }
    return (
        <div>
        <h1>User List</h1>
        <ul>
            {users.map(user=>(
               
                <UserCart key={user.id} user={user} toggleFollow={toggleFollow}/>
                
            ))}
        </ul>
        </div>
    )
}