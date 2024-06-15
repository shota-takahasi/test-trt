import { LatestNewsCard } from "@/component";
import styles from "./LatestWrapper.module.css";

export const LatestWrapper = () => {
  const latestData = [
    {
      title: "OPINION",
      description: "Nepal should stop selling its youth to the Indian and British armies"
    },
    {
      title: "MAGAZINE",
      description: "Big banks moved trillions despite knowing money was illegal"
    },
    {
      title: "LIFE",
      description: "Footballer Mesut Ozil requests help for infant with rare disease"
    },
    {
      title: "MAGAZINE",
      description: "Why are anti-Sisi protests growing in Egypt?"
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Popular today
      </div>

      <div className={styles.content}>
        {latestData && latestData.map((item: any, index: number) => {
          return (
            <div key={crypto.randomUUID()} className={styles.card}>
              <LatestNewsCard data={item} order={index + 1} />
            </div>
          );
        })}
      </div>
    </div>
  );
};