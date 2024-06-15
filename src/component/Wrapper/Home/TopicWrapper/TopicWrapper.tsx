"use client"

import clsx from "clsx";
import styles from "./TopicWrapper.module.css";
import { useState } from "react";

export const TopicWrapper = () => {
  const [active, setActive] = useState("topics");

  const topics = [
    {
      label: "Topics", tag: "topics"
    },
    {
      label: "Azerbaijan-Armenia dispute", tag: "dispute"
    },
    {
      label: "Covid-19", tag: "covid"
    },
    {
      label: "Eastern mediterranean", tag: "eastern"
    },
    {
      label: "My turkey", tag: "turkey"
    },
  ];

  return (
    <div className={styles.container}>
      {topics && topics.map((item: any) => {
        return (
          <div
            key={crypto.randomUUID()}
            className={clsx(styles.item, active == item.tag ? styles.active : styles.normal)}
            onClick={() => setActive(item.tag)}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};