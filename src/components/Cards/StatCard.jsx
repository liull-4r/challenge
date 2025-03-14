import React from "react";
import styles from "./StatCard.module.css";

const StatCard = ({
  title,
  value,
  icon,
  isActive,
  setActiveCard,
  iconClass,
}) => {
  return (
    <div
      className={`${styles.statCard} ${isActive ? styles.active : ""}`}
      onClick={() => setActiveCard(title)}
    >
      <div
        className={`${styles.icon} ${isActive ? styles.active : ""}  ${
          iconClass ? styles[iconClass] : ""
        } ${title === "Total Campaign" ? styles.iconBottomRight : ""}`}
      >
        {icon}
      </div>
      <div className={styles.content}>
        <span className={styles.title}>{title}</span>
        <p className={`${styles.value} ${isActive ? styles.active : ""}`}>
          {value}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
