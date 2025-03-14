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

const Campaigns = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Navbar />
        <StatsSection />
        <br />

        <div className={styles.chartContainer}>
          <SubscriberAnalysis />

          <WeeklySubscriberChart />
        </div>

        <CampaignsPerformance />

        <br />
        <SubscriberPieChart />

        <DailySubscriberChart />

        <SMSAnalysisChart />

        <br />
      </div>
    </div>
  );
};

export default Campaigns;
