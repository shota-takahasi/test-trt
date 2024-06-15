import styles from "./TopicNewsCard.module.css";

export const TopicNewsCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Africa
      </div>

      <div className={styles.description}>
        Hundreds of prisoners escape Uganda prison
      </div>
    </div>
  );
};