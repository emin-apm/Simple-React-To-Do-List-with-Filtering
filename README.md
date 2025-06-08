# Simple React To-Do List with Filtering

This is a React TypeScript project that allows users to manage a to-do list. You can add tasks, mark them as done, and filter between all, active, or completed tasks. The app provides real-time feedback and intuitive interactions, styled cleanly with CSS modules.


## Features
-  Add new tasks
-  Mark tasks as completed
-  Toggle tasks between done and pending
-  Filter tasks by:
  - All
  - Active
  - Completed
-  Displays error or success messages when adding tasks
-  Styled with CSS Modules

## Technologies

- **React**
- **TypeScript**
- **CSS Modules**
- **Font Awesome** 

## Setup and Running

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## File Structure

- `Notification.tsx ` - Inline feedback for success/error
- `SimpleToDo.tsx ` - Main To-Do logic and state
- `SimpleToDoStyles.module.css ` - CSS styles for the components
- `TodoInput.tsx` - Input field for adding new tasks
- `TodoItem.tsx ` - Individual task item with status
- `TodoList.tsx ` -  Lists all filtered To-Do items


## License

This project is open source and free to use.
