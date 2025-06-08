import styles from "./SimpleToDoStyles.module.css";
import TodoItem from "./TodoItem";

interface ToDoItem {
  id: number;
  text: string;
  done: boolean;
}

interface TodoListProps {
  allToDos: ToDoItem[];
  toggleDone: (id: number) => void;
}

export default function TodoList({ allToDos, toggleDone }: TodoListProps) {
  return (
    <div className={styles.listItems}>
      {[...allToDos]
        .sort((a, b) => Number(a.done) - Number(b.done))
        .map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            toggleDone={toggleDone}
          />
        ))}
    </div>
  );
}
