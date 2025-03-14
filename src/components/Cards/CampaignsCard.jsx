import React, { useState } from "react";
import StatCard from "./StatCard";

import styles from "./StatsSection.module.css";
import { MdCallEnd } from "react-icons/md";
import { HiPhoneMissedCall } from "react-icons/hi";
import { SlCallIn } from "react-icons/sl";

import { MdPhoneCallback } from "react-icons/md";

const CampaignsCard = () => {
  const [activeCard, setActiveCard] = useState("Total Campaign");

  return (
    <div className={styles.statsContainer}>
      <StatCard
        title="Answered Calls"
        value={3400}
        icon={<MdPhoneCallback size={40} />}
        iconClass="answered-icon"
        isActive={activeCard === "Answered Calls"}
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="No Answered Calls"
        value={1000}
        icon={<MdCallEnd />}
        iconClass="no-answer-icon"
        isActive={activeCard === "No Answered Calls"}
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="Failed Calls"
        value={1200}
        icon={<HiPhoneMissedCall />}
        isActive={activeCard === "Failed Calls"}
        iconClass="failed-icon"
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="Busy Calls"
        value={2400}
        icon={<SlCallIn />}
        isActive={activeCard === "Busy Calls"}
        iconClass="busy-icon"
        setActiveCard={setActiveCard}
      />
    </div>
  );
};

export default CampaignsCard;
