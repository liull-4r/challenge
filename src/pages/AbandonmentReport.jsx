import styles from "./AbandonmentReport.module.css";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import AbandonmentTrendChart from "../components/Charts/AbandonmentTrendChart";
import AbandonmentReportCard from "../components/Cards/AbandonmentReportCard";
import AbandonmentReportPerformance from "./AbandonmentReportPerformance";

const AbandonmentReport = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Navbar />
        <AbandonmentReportCard />
        <br />

        <AbandonmentReportPerformance />

        <AbandonmentTrendChart />
      </div>
    </div>
  );
};

export default AbandonmentReport;
