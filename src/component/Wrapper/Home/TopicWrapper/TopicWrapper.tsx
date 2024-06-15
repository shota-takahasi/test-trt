"use client"

import clsx from "clsx";
import styles from "./TopicWrapper.module.css";
import { useState } from "react";

export const TopicWrapper = () => {
  const [active, setActive] = useState("topics");

  return (
    <div className={styles.container}>
      <div
        className={clsx(styles.item, active == "topics" ? styles.active : styles.normal)}
        onClick={() => setActive("topics")}
      >
        Topics
      </div>

      <div
        className={clsx(styles.item, active == "dispute" ? styles.active : styles.normal)}
        onClick={() => setActive("dispute")}
      >
        Azerbaijan-Armenia dispute
      </div>

      <div
        className={clsx(styles.item, active == "covid" ? styles.active : styles.normal)}
        onClick={() => setActive("covid")}
      >
        covid-19
      </div>

      <div
        className={clsx(styles.item, active == "eastern" ? styles.active : styles.normal)}
        onClick={() => setActive("eastern")}
      >
        eastern mediterranean
      </div>

      <div
        className={clsx(styles.item, active == "turkey" ? styles.active : styles.normal)}
        onClick={() => setActive("turkey")}
      >
        my turkey
      </div>
    </div>
  );
};