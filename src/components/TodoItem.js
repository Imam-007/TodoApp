import styles from "./todoitem.module.css";

export default function TodoItem(props) {
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>{props.item}</div>
      <hr className={styles.line} />
    </div>
  );
}
