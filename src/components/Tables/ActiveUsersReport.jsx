import styles from "../../styles/GlobalTableStyles.module.css";
import { activeUsersData } from "../../data/activeUsersData";
import ReusableTable from "./ReusableTable";

const columns = [
  { key: "month", label: "Month" },
  { key: "smsUsers", label: "Active Users Via SMS" },
  { key: "robocallUsers", label: "Active Users Via Robocalling/IVR" },
  { key: "totalUsers", label: "Total Active Users" },
];

const ActiveUsersReport = () => {
  const title = "Total Active Users by Month (SMS vs Robocalling/IVR)";
  return (
    <div className={styles.pageContainer}>
      <ReusableTable columns={columns} data={activeUsersData} title={title} />
    </div>
  );
};

export default ActiveUsersReport;
