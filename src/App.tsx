import { useState } from 'react';
import './App.css';
import { Todo } from './types/types';
// import Header from './components/Header';
// import ToDoList from './components/ToDoList';
// import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState<string>('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <>
      <p>uncomment when you add your component</p>

      {/*<Header addTodo={addTodo}/>*/}
      {/*<ToDoList todos={todos} setTodos={setTodos}/> removeTodo={removeTodo}*/}
      {/*<Footer/>*/}
    </>
  );
}

export default App;
