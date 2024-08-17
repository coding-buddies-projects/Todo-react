# Todo-react

0. - [ :clock5: ] - **means task was taken and still not completed;**
0. - [x] **means the task was competed;**


#### Edit the file to take a task:
<br/>
If you take a task write your name/nickname in [], and add the link to your github in (). Also add this emoji :clock5:.
<br/>
<br/>
If the task was completed write "x" in [] instead of emoji.
<br/>
Example:
<br/>
1. - [ :clock5: ] Set up the initial React project structure - [Alex](https://github.com/aleksandramuraveva)
1. - [x] Set up the initial React project structure - [Alex](https://github.com/aleksandramuraveva)

# React To-Do Project Tasks

1. - [x] Set up the initial React project structure - [Alex](https://github.com/aleksandramuraveva)
1. - [ ] Create App component logic - []()
1. - [ :clock5: ] Create ToDoList component logic - [Havishya](https://github.com/havishya10)
1. - [ :clock5: ] Create Header component logic - [Havishya](https://github.com/havishya10)
1. - [ ] Create ToDoItem component logic - []()
1. - [ ] Create AddToDo form component logic - []()
1. - [ ] Create Footer component logic - []()
1. - [ ] Create Filter component logic - []()
1. - [ ] Create App component logic - []()
1. - [ :clock5: ] Create ThemeToggle component logic - [Havishya](https://github.com/havishya10) 
1. - [ ] Style App component using CSS - []()
1. - [ ] Style ToDoList component using CSS - []()
1. - [ :clock5: ] Style Header component using CSS - [Havishya](https://github.com/havishya10)
1. - [ ] Style ToDoItem component using CSS - []()
1. - [ ] Style AddToDo form component using CSS - []()
1. - [ ] Style Filter component using CSS - []()
1. - [ ] Style Footer component using CSS - []()
1. - [ :clock5: ] Style ThemeToggle component using CSS - [Havishya](https://github.com/havishya10)
1. - [ ] Add local storage support to persist tasks - []()
1. - [ ] Create a custom hook useLocalStorage for managing tasks - []()
1. - [ :clock5: ] Implement ContexApi to manage light/dark theme - [Havishya](https://github.com/havishya10) <!-- I will use React.useState() to toggle the classes when switching themes -->
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
```

# How to work?
To work on a repository locally and manage pull requests, you'll need to clone the repository to your laptop and set up Git. Here are the steps to get you started:

### 1. **Install Git**
If you haven't already, you'll need to install Git on your laptop. You can download it from [git-scm.com](https://git-scm.com/).

### 2. **Clone the Repository**
Open your terminal or command prompt and navigate to the directory where you want to clone the repository. Then, use the following command to clone the repository:

```bash
git clone https://github.com/your-organization/your-repository.git
```

Replace `your-organization` and `your-repository` with the actual names of your organization and repository.

### 3. **Navigate to the Repository**
Change into the repository directory:

```bash
cd your-repository
```

### 4. **Create a New Branch**
It's a good practice to create a new branch for your work. You can create and switch to a new branch using the following command:

```bash
git checkout -b your-branch-name
```

Replace `your-branch-name` with a descriptive name for your branch.

### 5. **Make Changes and Commit**
Make your changes to the code. After making changes, you can add and commit them:

```bash
git add .
git commit -m "Your commit message"
```

### 6. **Push the Branch to GitHub**
Push your branch to GitHub:

```bash
git push origin your-branch-name
```

### 7. **Create a Pull Request**
Go to your repository on GitHub. You should see a prompt to create a pull request for your newly pushed branch. Click on it and follow the instructions to create the pull request.

### 8. **Review and Merge**
Once the pull request is created, you or your collaborators can review the changes. After the review, you can merge the pull request into the main branch.
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>













# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
