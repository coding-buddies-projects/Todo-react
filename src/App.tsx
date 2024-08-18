import { useState } from 'react';
import AddToDo from './components/AddToDo/AddToDo';
import './App.css';

// Define the type for a todo item
export interface Todo {
  id: string;
  task: string;
  isCompleted: boolean;
}

function App() {
  // State to manage the list of tasks
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to add a new task to the todo list
  // This function receives the todo object (parameter) from the AddToDo component
  const addTask = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  console.log(todos);
  return (
    <>
      <AddToDo addTask={addTask} />
    </>
  );
}

export default App;
