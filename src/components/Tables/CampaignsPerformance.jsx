import styles from "../../styles/GlobalTableStyles.module.css";
import ReusableTable from "./ReusableTable";
import { campaignPerformance } from "../../data/campaignPerformance";

const columns = [
  { key: "name", label: "Campaign Name" },
  { key: "status", label: "Status" },
  { key: "successRate", label: "Success Rate" },
  { key: "engagement", label: "Engagement" },
  { key: "budget", label: "Budget" },
];

const CampaignsPerformance = () => {
  const title = "Top Performing Campaigns";
  return (
    <div className={styles.pageContainer}>
      <ReusableTable
        columns={columns}
        data={campaignPerformance}
        title={title}
      />
    </div>
  );
};

export default CampaignsPerformance;
