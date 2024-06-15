import { AuthorNewsCard, NormalNewsCard, TopicNewsCard } from "@/component";
import styles from "./ContentWrapper.module.css";

export const ContentWrapper = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.section}>
          <img
            className={styles.mainImage}
            src="https://cdn-i.pr.trt.com.tr/trtworld/16358427_0-57-8256-4649.jpeg"
            alt="main"
          />

          <div className={styles.mainTitle}>
            Azerbaijan issues final warning to Armenia in Karabakh clashes
          </div>
        </div>

        <div className={styles.section}>
          <NormalNewsCard />
          <NormalNewsCard />
        </div>

        <div className={styles.section}>
          <AuthorNewsCard />
          <AuthorNewsCard />
          <AuthorNewsCard />
          <TopicNewsCard />
          <TopicNewsCard />
          <TopicNewsCard />
        </div>
      </div>

      <div className={styles.bottom}></div>
    </div>
  );
};