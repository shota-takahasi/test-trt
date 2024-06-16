import styles from "./RelatedArticleCard.module.css";

export const RelatedArticleCard = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://cdn-i.pr.trt.com.tr/trtworld/w48/h48/q80/16957149_113-232-1380-2464.jpeg"
        alt="article"
      />

      <div className={styles.description}>
        Is Bernie Sanders actually revolutionary and what does he stand for?
      </div>
    </div>
  );
};