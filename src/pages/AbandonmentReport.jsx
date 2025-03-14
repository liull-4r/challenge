import styles from "./AbandonmentReport.module.css";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import StatsSection from "../components/Cards/StatsSection";
import AbandonmentTrendChart from "../components/Charts/AbandonmentTrendChart";

const AbandonmentReport = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Navbar />
        <StatsSection />
        <br />

        <AbandonmentTrendChart />
      </div>
    </div>
  );
};

export default AbandonmentReport;
