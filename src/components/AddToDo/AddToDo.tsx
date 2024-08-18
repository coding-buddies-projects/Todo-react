import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Todo } from '../../App';
import { v4 as uuidv4 } from 'uuid';
import './AddToDo.css';

interface AddToDoProps {
  addTask: (todo: Todo) => void;
}

function AddToDo({ addTask }: AddToDoProps) {
  const [input, setInput] = useState<string>('');
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const newTask: Todo = {
      id: uuidv4(),
      task: input,
      isCompleted: false,
    };

    addTask(newTask);
    setInput('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  
  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  return (
    <section className="add-todo-section">
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div className="triple-dots">
            <div className={`dot ${isFocus ? 'animation' : ''}`}></div>
            <div className={`dot ${isFocus ? 'animation' : ''}`}></div>
            <div className={`dot ${isFocus ? 'animation' : ''}`}></div>
          </div>
          <div className="form-control">
            <label htmlFor="todo-input" className="sr-only">
              Task Input
            </label>
            <input
              type="text"
              name="todo"
              id="todo-input"
              className="form-input"
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              value={input}
              placeholder={`${isFocus ? 'Press enter...' : 'What is your next task?'}`}
              autoComplete="off"
              required
            />
          </div>
        </div>
      </form>
    </section>
  );
}

export default AddToDo;
