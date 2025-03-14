


import React from "react";
import styles from "./StatCard.module.css";

const StatCard = ({ title, value, icon, isActive, setActiveCard }) => {
  return (
    <div
      className={`${styles.statCard} ${isActive ? styles.active : ""}`}
      onClick={() => setActiveCard(title)}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <h2 className={styles.value}>{value.toLocaleString()}</h2>
      </div>
    </div>
  );
};

export default StatCard;
