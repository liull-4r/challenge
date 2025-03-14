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
import styles from "./AbandonmentTrendChart.module.css";
import { abandonmentData } from "../../data/abandonmentData";

const AbandonmentTrendChart = () => {
  return (
    <div className={styles.chartContainer}>
      {/* Header */}
      <h3 className={styles.chartTitle}>
        Abandonment Trend (SMS vs Robocalling/IVR) by Week
      </h3>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={abandonmentData}
          margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="week" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />

          {/* Bars */}
          <Bar
            dataKey="smsAbandoned"
            fill="#0A0F8F"
            barSize={35}
            radius={[5, 5, 0, 0]}
            name="SMS Abandoned Users"
          />
          <Bar
            dataKey="robocallAbandoned"
            fill="#90A4FF"
            barSize={35}
            radius={[5, 5, 0, 0]}
            name="Robocalling/IVR Abandoned Users"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AbandonmentTrendChart;
