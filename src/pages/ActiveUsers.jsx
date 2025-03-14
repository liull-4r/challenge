import styles from "../styles/GlobalTableStyles.module.css";
import Navbar from "../components/Layout/Navbar";
import Sidebar from "../components/Layout/Sidebar";
import AbandonmentReportCard from "../components/Cards/AbandonmentReportCard";

import ActiveUsersReport from "../components/Tables/ActiveUsersReport";
import ActiveUsersReportCard from "../components/Cards/ActiveUsersReportCard";

const ActiveUsers = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <div className={styles.main}>
        <Navbar />
        <ActiveUsersReportCard />
        <br />

        <ActiveUsersReport />
      </div>
    </div>
  );
};

export default ActiveUsers;
