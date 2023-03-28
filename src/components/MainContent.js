import './MainContents.css';
import { useState } from 'react';
export const MainContent = () => {
  const todosData = [
    {
      id: 1,
      title: 'Learn React',
      completed: true,
    },
    {
      id: 2,
      title: 'Practice Reacts',
      completed: false,
    },
    {
      id: 3,
      title: 'Kupi lebac',
      completed: false,
    },
  ];

  const [title, setTitle] = useState('Todo lista');
  const [todos, setTodos] = useState(todosData);

  const onDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <main className={'wrapper'}>
      <button
        onClick={() => {
          setTitle('Title kad kliknemo novi');
        }}
      >
        Promeni Title
      </button>
      {title}
      <div className="todo-list">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <input type="checkbox" defaultChecked={todo.completed} />
              <span>{todo.title}</span>
              <button onClick={() => onDeleteTodo(todo.id)}>Delete item</button>
            </div>
          );
        })}
      </div>
    </main>
  );
};
