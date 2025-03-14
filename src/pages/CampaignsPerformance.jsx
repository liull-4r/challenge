import styles from "./CampaignsPerformance.module.css";
import ReusableTable from "../components/Tables/ReusableTable";
import { campaignPerformance } from "../data/campaignPerformance";

const columns = [
  { key: "name", label: "Campaign Name" },
  { key: "status", label: "Status" },
  { key: "successRate", label: "Success Rate" },
  { key: "engagement", label: "Engagement" },
  { key: "budget", label: "Budget" },
];

const CampaignsPerformance = () => {
  return (
    <div className={styles.pageContainer}>
      <ReusableTable columns={columns} data={campaignPerformance} />
    </div>
  );
};

export default CampaignsPerformance;
