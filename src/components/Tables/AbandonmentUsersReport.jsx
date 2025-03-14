import styles from "../../styles/GlobalTableStyles.module.css";
import { abandonmentUsersData } from "../../data/abandonmentUsersData";
import ReusableTable from "./ReusableTable";

const columns = [
  { key: "month", label: "Month" },
  { key: "smsUsers", label: "SMS Abandoned Users" },
  { key: "robocallUsers", label: "Robocalling/IVR Abandoned Users" },
  { key: "totalUsers", label: "Total Abandoned Users" },
];

const AbandonmentUsersReport = () => {
  const title = "Total Abandoned Users by Month (SMS vs Robocalling/IVR)";
  return (
    <div className={styles.pageContainer}>
      <ReusableTable
        columns={columns}
        data={abandonmentUsersData}
        title={title}
      />
    </div>
  );
};

export default AbandonmentUsersReport;
