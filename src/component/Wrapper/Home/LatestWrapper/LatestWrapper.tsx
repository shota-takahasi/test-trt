import { LatestNewsCard } from "@/component";
import styles from "./LatestWrapper.module.css";

export const LatestWrapper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Popular today
      </div>

      <div className={styles.content}>
        <div className={styles.card}>
          <LatestNewsCard />
        </div>

        <div className={styles.card}>
          <LatestNewsCard />
        </div>

        <div className={styles.card}>
          <LatestNewsCard />
        </div>

        <div className={styles.card}>
          <LatestNewsCard />
        </div>
      </div>
    </div>
  );
};