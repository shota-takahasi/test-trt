import styles from "./AuthorNewsCard.module.css";

export const AuthorNewsCard = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.author}
        src="https://images-cdn.trtworld.com/trtworld/w48/h48/q80/20110614_0-964-3024-3067.jpeg"
        alt="author"
      />

      <div className={styles.content}>
        <div className={styles.name}>
          CJ Werleman
        </div>

        <div className={styles.title}>
          The UAE's alarming reliance on mercenaries
        </div>
      </div>
    </div>
  );
};