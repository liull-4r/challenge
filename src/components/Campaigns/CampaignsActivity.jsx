import styles from "./CampaignsActivity.module.css";
import { campaigns } from "../../data/campaignsData";
import { HiArrowRight } from "react-icons/hi";

const CampaignsActivity = () => {
  return (
    <div className={styles.container}>
      {/* Header */}
      <h3 className={styles.title}>Campaigns Activity</h3>

      {/* Campaign List */}
      <div className={styles.list}>
        {campaigns.map((campaign) => (
          <div key={campaign.id} className={styles.campaignItem}>
            <div className={styles.bar}></div>
            <div className={styles.text}>
              <span className={styles.campaignName}>{campaign.name}</span>
              <span className={styles.details}>{campaign.details}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className={styles.viewAll}>
        <span>View all Activity</span>
        <HiArrowRight className={styles.arrowIcon} />
      </div>
    </div>
  );
};

export default CampaignsActivity;
