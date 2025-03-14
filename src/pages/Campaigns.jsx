import styles from "./Campaigns.module.css";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import StatsSection from "../components/Cards/StatsSection";
import SubscriberAnalysis from "../components/Charts/SubscriberAnalysis";
import WeeklySubscriberChart from "../components/Charts/WeeklySubscriberChart";
import CampaignsPerformance from "./CampaignsPerformance";
import SubscriberPieChart from "../components/Charts/SubscriberPieChart";
import DailySubscriberChart from "../components/Charts/DailySubscriberChart";
import SMSAnalysisChart from "../components/Charts/SMSAnalysisChart";
import CampaignsCard from "../components/Cards/CampaignsCard";

const Campaigns = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Navbar />
        <CampaignsCard />
        <br />

        <div className={styles.chartContainer}>
          <SubscriberAnalysis />

          <WeeklySubscriberChart />
        </div>

        <CampaignsPerformance />

        <br />

        <div className={styles.chartContainer}>
          <SubscriberAnalysis />

          <SubscriberPieChart />
        </div>
        <CampaignsPerformance />
        <SMSAnalysisChart />

        <br />
      </div>
    </div>
  );
};

export default Campaigns;
