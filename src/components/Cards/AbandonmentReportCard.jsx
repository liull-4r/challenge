import React, { useState } from "react";
import StatCard from "./StatCard";

import styles from "./StatsSection.module.css";
import { MdCallEnd } from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import { SlCallIn } from "react-icons/sl";

import { MdPhoneCallback } from "react-icons/md";

const AbandonmentReportCard = () => {
  const [activeCard, setActiveCard] = useState("Total Campaign");

  return (
    <div className={styles.statsContainer}>
      <StatCard
        title="SMS Abandoned Users"
        value={3400}
        isActive={activeCard === "SMS Abandoned Users"}
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="Rebocalling/IVR Abandoned Users"
        value={1000}
        isActive={activeCard === "Rebocalling/IVR Abandoned Users"}
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="Total Abandoned Users"
        value={1200}
        isActive={activeCard === "Total Abandoned Users"}
        setActiveCard={setActiveCard}
      />
    </div>
  );
};

export default AbandonmentReportCard;
