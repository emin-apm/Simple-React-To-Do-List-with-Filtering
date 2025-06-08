import styles from "./SimpleToDoStyles.module.css";

interface FilterButtons {
  currentFilter: "all" | "active" | "completed";
  onChangeFilter: (filter: "all" | "active" | "completed") => void;
}

export default function TodoFilter({
  currentFilter,
  onChangeFilter,
}: FilterButtons) {
  return (
    <div className={styles.filters}>
      <button
        className={currentFilter === "all" ? styles.activeFilter : ""}
        onClick={() => onChangeFilter("all")}
      >
        All
      </button>
      <button
        className={currentFilter === "active" ? styles.activeFilter : ""}
        onClick={() => onChangeFilter("active")}
      >
        Active
      </button>
      <button
        className={currentFilter === "completed" ? styles.activeFilter : ""}
        onClick={() => onChangeFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}
