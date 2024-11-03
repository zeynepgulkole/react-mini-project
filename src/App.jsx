import { useEffect, useState } from 'react'
import './App.css'
import UserList from './components/User/UserList'
import ProductList from './components/Product/ProductList'
import UserListcyc from './components/LcycUser/UserList'
import AutoRefreshComponent from './components/UserCount/AutoRefreshComponent'
import LiveClockThema from './components/LiveClockDynamicThema/LiveClockThema'
import TodoInput from './components/Todo/TodoInput'
import TodoList from './components/Todo/TodoList'
import ShoppingApp from './components/ShoppingApp'
import UserForm from './components/UserForm'

function App() {

  // Todo start
//   const [todos, setTodos] = useState([])

//   useEffect(() => {
//     const storedTodos = localStorage.getItem('todos');
//     if(storedTodos){
//       setTodos(JSON.parse(storedTodos))
//     }
//   },[])

//   const addTodo = (task) => {
//     const newTodos = [...todos, { id: todos.length + 1, task, completed: false }];
//     setTodos(newTodos);
//     localStorage.setItem('todos', JSON.stringify(newTodos))
//   }

//   const toggleTodo = (id) => {
//     const updatedTodos = todos.map((todo) =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     );
//     setTodos(updatedTodos);
//     localStorage.setItem('todos', JSON.stringify(updatedTodos));
//   };

// const removeTodo = (id) => {
//   const removeTodos = todos.map((todo) =>
//     todo && todo.id === id ? { ...todo, completed: true } : todo
//   );
//   setTodos(removeTodos);
//   localStorage.setItem('todos', JSON.stringify(removeTodos));
// };

//   console.log(todos);

// Todo end
  
  return (
   <div>
    {/* <UserList /> */}
    {/* <ProductList /> */}
    {/* <UserListcyc /> */}
    {/* <AutoRefreshComponent /> */}
    {/* <LiveClockThema/> */}
    {/* <div>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
    </div> */}
    {/* <ShoppingApp/> */}
    <UserForm/>
   </div>
  )
}

export default App
