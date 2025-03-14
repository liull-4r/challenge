import styles from "./AbandonmentReportPerformance.module.css";
import { abandonmentReportData } from "../data/abandonmentReportData";

import ReusableTable from "../components/Tables/ReusableTable";

const columns = [
  { key: "month", label: "Month" },
  { key: "smsRate", label: "SMS Abandoned Rate" },
  { key: "ivrRate", label: "Robocalling/IVR Abandoned Rate" },
  { key: "totalRate", label: "Total Abandoned Rate" },
];

const AbandonmentReportPerformance = () => {
  return (
    <div className={styles.pageContainer}>
      <ReusableTable columns={columns} data={abandonmentReportData} />
    </div>
  );
};

export default AbandonmentReportPerformance;
