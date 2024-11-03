import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      addTodo(task); // App'teki addTodo fonksiyonu çağrılır.
      setTask(''); // Input alanını temizle.
    }
  };

  console.log(task);
  
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Yeni görev..."
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
              addTodo(e.target.value);
              e.target.value = ''; // input'u temizler
            }
          }}
      />
      <button onClick={handleAdd}>Ekle</button>
    </div>
  );
}

export default TodoInput;
