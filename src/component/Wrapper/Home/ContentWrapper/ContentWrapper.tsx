import { AuthorNewsCard, NormalNewsCard, TopicNewsCard } from "@/component";
import styles from "./ContentWrapper.module.css";

export const ContentWrapper = (props: { headline: any, news: any }) => {
  const [ headline ] = props?.headline;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.section}>
          <img
            className={styles.mainImage}
            src={headline?.mainImageUrl}
            alt="main"
          />

          <div className={styles.mainTitle}>
            {headline?.title}
          </div>
        </div>

        <div className={styles.detail}>
          <div className={styles.info}>
            {props?.news && props?.news.map((item: any) => {
              return (
                <div key={crypto.randomUUID()} className={styles.divider}>
                  <NormalNewsCard data={item} />
                </div>
              );
            })}
          </div>

          <div className={styles.info}>
            <div className={styles.divider}>
              <AuthorNewsCard />
            </div>
            <div className={styles.divider}>
              <AuthorNewsCard />
            </div>
            <div className={styles.divider}>
              <AuthorNewsCard />
            </div>

            <div className={styles.divider}>
              <TopicNewsCard />
            </div>
            <div className={styles.divider}>
              <TopicNewsCard />
            </div>
            <div className={styles.divider}>
              <TopicNewsCard />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}></div>
    </div>
  );
};