import styles from "./SimpleToDoStyles.module.css";

interface TodoInputProps {
  inputValue: string;
  setInputValue: (value: string | ((prev: string) => string)) => void;
  handleAddTask: () => void;
}

export default function TodoInput({
  inputValue,
  setInputValue,
  handleAddTask,
}: TodoInputProps) {
  return (
    <div className={styles.todoBody}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={styles.todoInput}
        placeholder="Add your task :)"
      />
      <span onClick={handleAddTask} className={styles.addIcon}>
        <i className="fa-solid fa-plus"></i>
      </span>
    </div>
  );
}
