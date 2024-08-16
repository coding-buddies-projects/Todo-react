# Todo-react
Edit the file to take a task:
<br/>
If you take a task write your name/nickname in [], and add the link to your github in (). Also add this emoji :clock5:.
<br/>
If the task was completed write "x" in [] instead of emoji.
<br/>
Example:
<br/>
1. - [ :clock5: ] Set up the initial React project structure - [Alex](https://github.com/aleksandramuraveva)
1. - [x] Set up the initial React project structure - [Alex](https://github.com/aleksandramuraveva)

# React To-Do Project Tasks

1. - [ :clock5: ] Set up the initial React project structure - [Alex](https://github.com/aleksandramuraveva)
1. - [ ] Create App component logic - []()
1. - [ ] Create ToDoList component logic - []()
1. - [ ] Create Header component logic - []()
1. - [ ] Create ToDoItem component logic - []()
1. - [ ] Create AddToDo form component logic - []()
1. - [ ] Create Footer component logic - []()
1. - [ ] Create Filter component logic - []()
1. - [ ] Create App component logic - []()
1. - [ ] Create ThemeToggle component logic - []()
1. - [ ] Style App component using CSS - []()
1. - [ ] Style ToDoList component using CSS - []()
1. - [ ] Style Header component using CSS - []()
1. - [ ] Style ToDoItem component using CSS - []()
1. - [ ] Style AddToDo form component using CSS - []()
1. - [ ] Style Filter component using CSS - []()
1. - [ ] Style Footer component using CSS - []()
1. - [ ] Style ThemeToggle component using CSS - []()
1. - [ ] Add local storage support to persist tasks - []()
1. - [ ] Create a custom hook useLocalStorage for managing tasks - []()
1. - [ ] Implement ContexApi to manage light/dark theme - []()
1. - [ ] Implement filtering options (e.g., all, active, completed) - []()
1. - [ ] Write unit tests for components and hooks - []()
1. - [ ] Set up CI/CD pipeline for automated testing and deployment - []()
1. - [ ] Optimize performance and improve accessibility - []()
1. - [ ] Refactor codebase for better readability and maintainability - []()
1. - [ ] Review and merge pull requests - []()

## Aproximate structure
structure might be different, just an example

```plaintext
src/
├── components/
│   ├── App/
│   │   ├── App.tsx
│   │   └── App.css
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.css
│   ├── ToDoList/
│   │   ├── ToDoList.tsx
│   │   └── ToDoList.css
│   ├── ToDoItem/
│   │   ├── ToDoItem.tsx
│   │   └── ToDoItem.css
│   ├── AddToDo/
│   │   ├── AddToDo.tsx
│   │   └── AddToDo.css
│   ├── Filter/
│   │   ├── Filter.tsx
│   │   └── Filter.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.css
│   ├── ThemeToggle/
│   │   ├── ThemeToggle.tsx
│   │   └── ThemeToggle.css
├── context/
│   ├── ThemeContext.tsx
├── hooks/
│   └── useLocalStorage.ts
├── styles/
│   ├── global.css
│   ├── light-theme.css
│   └── dark-theme.css
└── index.tsx

