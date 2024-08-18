import { useState } from 'react';
import './App.css';
import { Todo } from './types/types';
import AddToDo from './components/AddToDo/AddToDo';
import ToDoItem from './components/ToDoItem/ToDoItem';
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

  // Function to change status task
  // This function toggles the 'isCompleted' status of a todo item based on its id
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
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

      {/* 
          This component is mapped inside the ToDoList component as its parent. Please move this component to the ToDoList component.
          Receives the following props:
          todo: an object representing the task details
          toggleComplete: a function to handle the task completion toggle
          index: the position of the task in the list

      */}
      {todos.map((todo, index) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          index={index}
        />
      ))}

      {/*<Header addTodo={addTodo}/>*/}
      {/*<ToDoList todos={todos} setTodos={setTodos}/> removeTodo={removeTodo}*/}
      {/*<Footer/>*/}
    </>
  );
}

export default App;
