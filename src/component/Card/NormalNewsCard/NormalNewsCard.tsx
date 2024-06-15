import styles from "./NormalNewsCard.module.css";

export const NormalNewsCard = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://cdn-i.pr.trt.com.tr/trtworld/16275004_0-183-4498-2533.jpeg"
        alt="normal"
      />

      <div className={styles.title}>
        South Africa's Ramaposa rows back from pledge to quit IC
      </div>

      <div className={styles.description}>
        South African President Cyril Ramaphosa a day earlier said his ANC party had resolved that his country should quit the ICC, which last month issued an arrest warrant against Russian President Vladimir Putin.
      </div>
    </div>
  );
};