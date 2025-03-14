import styles from "./Dashboard.module.css";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import StatsSection from "../components/Cards/StatsSection";
import LineChartComponent from "../components/Charts/LineChart";
import PieChartComponent from "../components/Charts/PieChart";
import { ivrData, smsData } from "../data/chartData";
import CampaignsActivity from "../components/Campaigns/CampaignsActivity";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Navbar />
        <StatsSection />

        <br />

        <LineChartComponent />

        <br />

        <div className={styles.statsContainer}>
          <PieChartComponent title="Total IVR Rate" data={ivrData} />
          <PieChartComponent title="Total SMS Rate" data={smsData} />

          <CampaignsActivity />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
