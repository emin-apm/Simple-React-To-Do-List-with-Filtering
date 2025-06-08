import styles from "./SimpleToDoStyles.module.css";

interface NotificationProps {
  message: { type: "success" | "error"; text: string } | null;
}

export default function Notification({ message }: NotificationProps) {
  if (!message) return null;

  return (
    <div className={styles.notifications}>
      <span
        className={message.type === "error" ? styles.error : styles.success}
      >
        {message.text}
      </span>
    </div>
  );
}
