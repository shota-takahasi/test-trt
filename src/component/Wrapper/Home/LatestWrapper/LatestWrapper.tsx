import { LatestNewsCard } from "@/component";
import styles from "./LatestWrapper.module.css";

export const LatestWrapper = (props: { data: any }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Popular today
      </div>

      <div className={styles.content}>
        {props.data && props.data.map((item: any, index: number) => {
          return (
            <div key={crypto.randomUUID()} className={styles.card}>
              <LatestNewsCard data={item} order={index + 1} />
            </div>
          );
        })}
      </div>
    </div>
  );
};