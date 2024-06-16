import styles from "./HeaderWrapper.module.css";

export const HeaderWrapper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.category}>
          <div className={styles.topic}>America</div>
          <div className={styles.date}>1 Hour Ago</div>
        </div>

        <div className={styles.title}>
          Early US voting numbers indicate record turnout for November election
        </div>

        <div className={styles.description}>
          The early surge in voting has led to the prediction of a record turnout of about 150 million, representing 65 percent of eligible voters, the highest rate since 1908.
        </div>
      </div>

      <div className={styles.space}></div>
    </div>
  );
};