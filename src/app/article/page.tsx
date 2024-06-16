import styles from "./page.module.css";
import { ContentWrapper } from "@/component/Wrapper/Article/ContentWrapper";
import { HeaderWrapper } from "@/component/Wrapper/Article/HeaderWrapper";

const Article = () => {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div className={styles.container}>
          <HeaderWrapper />
          <ContentWrapper />
        </div>
      </div>
    </main>
  );
};

export default Article;
