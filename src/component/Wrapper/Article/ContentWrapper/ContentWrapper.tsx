import styles from "./ContentWrapper.module.css";

export const ContentWrapper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topic}>
          <img
            className={styles.topicImage}
            src="https://cdn-i.pr.trt.com.tr/trtworld/16358427_0-57-8256-4649.jpeg"
            alt="image"
          />

          <div className={styles.topicTitle}>
            Reuters
          </div>

          <div className={styles.topicDescription}>
            Orange County Registrar in Santa Ana, California, US, October, 5, 2020.
          </div>
        </div>

        <div className={styles.description}>
          Americans are rushing to cast ballots ahead of the November election at an unprecedented pace, early voting numbers show, indicating a possible record turnout for the showdown between President Donald Trump and Democratic rival Joe Biden.
        </div>

        <div className={styles.tag}></div>
      </div>

      <div className={styles.related}></div>
    </div>
  );
};