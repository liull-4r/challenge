import styles from "../../styles/GlobalTableStyles.module.css";
import { abandonmentReportData } from "../../data/abandonmentReportData";

import ReusableTable from "./ReusableTable";

const columns = [
  { key: "month", label: "Month" },
  { key: "smsRate", label: "SMS Abandoned Rate" },
  { key: "ivrRate", label: "Robocalling/IVR Abandoned Rate" },
  { key: "totalRate", label: "Total Abandoned Rate" },
];

const AbandonmentReportPerformance = () => {
  const title = "Abandonment Rate by Interaction Type (SMS vs Robocalling/IVR)";
  return (
    <div className={styles.pageContainer}>
      <ReusableTable
        columns={columns}
        data={abandonmentReportData}
        title={title}
      />
    </div>
  );
};

export default AbandonmentReportPerformance;
