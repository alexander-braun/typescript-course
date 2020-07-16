import React, { useState } from 'react';
import { TodoList } from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { text, id: Math.random().toString() },
    ]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  return (
    <div className='App'>
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList todos={todos} todoDeleteHandler={todoDeleteHandler} />
    </div>
  );
};

export default App;
