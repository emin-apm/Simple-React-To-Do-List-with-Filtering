import styles from "./SimpleToDoStyles.module.css";

interface ToDoItemProps {
  id: number;
  text: string;
  done: boolean;
  toggleDone: (id: number) => void;
}

export default function TodoItem({
  id,
  text,
  done,
  toggleDone,
}: ToDoItemProps) {
  return (
    <div className={styles.items} onClick={() => toggleDone(id)}>
      <span className={styles.icon}>
        <i
          className={done ? "fa-solid fa-square-check" : "fa-regular fa-square"}
        ></i>
      </span>
      <span className={done ? styles.done : ""}>{text}</span>
    </div>
  );
}
