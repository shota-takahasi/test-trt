import styles from "./LatestNewsCard.module.css";

export const LatestNewsCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.number}>
        1
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          Opinion
        </div>

        <div className={styles.description}>
          Nepal should stop selling its youth to the Indian and British armies
        </div>
      </div>
    </div>
  );
};