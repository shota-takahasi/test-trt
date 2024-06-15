import { ContentWrapper, LatestWrapper, TopicWrapper } from "@/component/Wrapper/Home";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div className={styles.container}>
          <TopicWrapper />
          <ContentWrapper />
          <LatestWrapper />
        </div>
      </div>
    </main>
  );
};

export default Home;
