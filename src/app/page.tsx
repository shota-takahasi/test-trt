import { ContentWrapper, LatestWrapper, TopicWrapper } from "@/component/Wrapper/Home";
import styles from "./page.module.css";

const getData = async () => {
  const res = await fetch("https://www.trtworld.com/api/homepage");

  if (!res.ok) {
    throw new Error("Failed to fetch API data");
  }

  return res.json();
};

const Home = async () => {
  const { metadata, latest, news, headline } = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.section}>
        <div className={styles.container}>
          <TopicWrapper />

          {headline && news &&
            <ContentWrapper headline={headline} news={news} />
          }

          {latest &&
            <LatestWrapper data={latest} />
          }
        </div>
      </div>
    </main>
  );
};

export default Home;
