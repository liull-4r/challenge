import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import styles from "./SMSAnalysisChart.module.css";
import { smsCampaignData } from "../../data/smsCampaignData";

const SMSAnalysisChart = () => {
  return (
    <div className={styles.chartContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <h3>SMS Analysis</h3>
          <h2 className={styles.mainNumber}>3,400</h2>
          <p className={styles.subText}>Total SMS Campaign</p>
        </div>
        <div className={styles.datePicker}>
          <span>This Week</span> ⌵
        </div>
      </div>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={smsCampaignData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />

          {/* Bars */}
          <Bar
            dataKey="delivered"
            fill="#2C49D8"
            barSize={30}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="queue"
            fill="#E9A8FF"
            barSize={30}
            radius={[5, 5, 0, 0]}
          />
          <Bar
            dataKey="failed"
            fill="#FF92A5"
            barSize={30}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SMSAnalysisChart;
