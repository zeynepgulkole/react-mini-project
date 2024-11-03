export default function TodoItem({todo, toggleTodo, removeTodo}) {
    return (
        <div>
             <span
        onClick={() => toggleTodo(todo.id)}
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? 'grey' : 'black',
          }}
      >
        {todo.task}
      </span>
            <button onClick={() => removeTodo(todo.id)}>Sil</button>
        </div>
    )
}