import React, { useState } from "react";
import StatCard from "./StatCard";
import styles from "./StatsSection.module.css";

const ActiveUsersReportCard = () => {
  const [activeCard, setActiveCard] = useState("Total Active Users");

  return (
    <div className={styles.statsContainer}>
      <StatCard
        title="Active Users Via SMS"
        value={19600}
        isActive={activeCard === "Active Users Via SMS"}
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="Active Users Via Robocalling/IVR"
        value={11800}
        isActive={activeCard === "Active Users Via Robocalling/IVR"}
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="Total Active Users"
        value={33400}
        isActive={activeCard === "Total Active Users"}
        setActiveCard={setActiveCard}
      />
    </div>
  );
};

export default ActiveUsersReportCard;
