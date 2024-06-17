import styles from "./NormalNewsCard.module.css";

export const NormalNewsCard = (props: { data: any }) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={props?.data?.mainImageUrl}
        alt="normal"
      />

      <div className={styles.title}>
        {props?.data?.title}
      </div>

      <div className={styles.description}>
        {props?.data?.description}
      </div>
    </div>
  );
};