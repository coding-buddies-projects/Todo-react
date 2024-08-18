import React from 'react';
import { Todo } from '../../types/types';
import './ToDoItem.css';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  index: number;
}

function ToDoItem({ todo, toggleComplete, index }: TodoItemProps) {
  const handleToggleComplete = () => {
    toggleComplete(todo.id);
  };

  const colorDots = ['#fd99af', '#fac608', '#3fd4f4'];

  const getDynamicColorDots = (index: number) => {
    return colorDots[index % colorDots.length];
  };

  const color = getDynamicColorDots(index);

  return (
    <li>
      <div className="task-item">
        <div className="task-item-content">
          <div className="dot" style={{ backgroundColor: color }}></div>
          <p className={`${todo.isCompleted ? 'complete' : ''} `}>
            {todo.text}
          </p>
        </div>
        <button
          className={`item-cta ${todo.isCompleted ? 'complete' : ''} `}
          onClick={handleToggleComplete}
        >
          <span className={`emoji ${todo.isCompleted ? 'complete' : ''} `}>
            ✔
          </span>
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
