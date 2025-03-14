import React, { useState } from "react";
import StatCard from "./StatCard";
import { MdOutlineShowChart } from "react-icons/md";
import { BiSolidPhoneCall, BiMessageDots } from "react-icons/bi";
import styles from "./StatsSection.module.css";

const StatsSection = () => {
  const [activeCard, setActiveCard] = useState("Total Campaign");

  return (
    <div className={styles.statsContainer}>
      <StatCard
        title="Total Campaign"
        value={7000}
        icon={<MdOutlineShowChart />}
        isActive={activeCard === "Total Campaign"}
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="Call Campaign"
        value={3200}
        icon={<BiSolidPhoneCall />}
        isActive={activeCard === "Call Campaign"}
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="SMS Campaign"
        value={3000}
        icon={<BiMessageDots />}
        isActive={activeCard === "SMS Campaign"}
        setActiveCard={setActiveCard}
      />
      <StatCard
        title="SMS & Call Campaign"
        value={800}
        icon={<BiSolidPhoneCall />}
        isActive={activeCard === "SMS & Call Campaign"}
        setActiveCard={setActiveCard}
      />
    </div>
  );
};

export default StatsSection;
