import Link from "next/link";
import styles from "./LatestNewsCard.module.css";

export const LatestNewsCard = (props: { data: any, order: number }) => {
  return (
    <Link href="" className={styles.container}>
      <div className={styles.number}>
        {props?.order}
      </div>

      <div className={styles.content}>
        <div className={styles.title}>
          {props?.data?.title}
        </div>

        <div className={styles.description}>
          {props?.data?.description}
        </div>
      </div>
    </Link>
  );
};