import styles from "../styles/GlobalTableStyles.module.css";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import SubscriberAnalysis from "../components/Charts/SubscriberAnalysis";
import WeeklySubscriberChart from "../components/Charts/WeeklySubscriberChart";
import CampaignsPerformance from "../components/Tables/CampaignsPerformance";
import SubscriberPieChart from "../components/Charts/SubscriberPieChart";
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
