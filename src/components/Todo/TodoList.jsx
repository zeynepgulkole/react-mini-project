import TodoItem from "./TodoItem";

export default function TodoList({todos, removeTodo, toggleTodo}){

    return (
        <div>
            <h1>Todo List</h1>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>
            ))}
        </div>
    )
}