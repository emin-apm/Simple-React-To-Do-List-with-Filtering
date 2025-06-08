import { useEffect, useState } from "react";
import styles from "./SimpleToDoStyles.module.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import FilterButtons from "./FilterButtons";
import Notification from "./Notification";

export interface ToDoItem {
  id: number;
  text: string;
  done: boolean;
}

export default function SimpleToDo() {
  const [allToDos, setAllToDos] = useState<ToDoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleAddTask = () => {
    if (!inputValue.trim()) {
      setMessage({ type: "error", text: "Please enter a task!" });
      return;
    }

    const newTask: ToDoItem = {
      id: Date.now(),
      text: inputValue.trim(),
      done: false,
    };

    setAllToDos([...allToDos, newTask]);
    setInputValue("");
    setMessage({ type: "success", text: "Task added successfully!" });
  };

  const toggleDone = (id: number) => {
    setAllToDos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const filteredToDos = allToDos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  useEffect(() => {
    if (!message) return;

    const timeoutId = setTimeout(() => {
      setMessage(null);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [message]);

  return (
    <div className={styles.container}>
      <div className={styles.todoHeader}>
        <h2>ToDo List</h2>
        <span>
          <i className="fa-solid fa-list-check"></i>
        </span>
      </div>

      <TodoInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddTask={handleAddTask}
      />

      <FilterButtons currentFilter={filter} onChangeFilter={setFilter} />

      <Notification message={message} />

      <TodoList allToDos={filteredToDos} toggleDone={toggleDone} />
    </div>
  );
}
