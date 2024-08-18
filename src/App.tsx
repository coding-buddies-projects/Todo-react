import { useState } from 'react';
import './App.css';
import { Todo } from './types/types';
import AddToDo from './components/AddToDo/AddToDo';
// import Header from './components/Header';
// import ToDoList from './components/ToDoList';
// import Footer from './components/Footer';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const removeTodo = (todoId: string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  // Function to add a new task to the todo list
  // This function receives the todo object (parameter) from the AddToDo component
  const addTask = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  console.log(todos);

  return (
    <>
      <p>uncomment when you add your component</p>

      {/* 
          This is the AddToDo component, which receives the addTask function as a prop. 
          From the previous commit, it seems that this component is within the header component. 
          Therefore, for whoever is managing the header component, please put this component inside it.
      */}
      <AddToDo addTask={addTask} />

      {/*<Header addTodo={addTodo}/>*/}
      {/*<ToDoList todos={todos} setTodos={setTodos}/> removeTodo={removeTodo}*/}
      {/*<Footer/>*/}
    </>
  );
}

export default App;
