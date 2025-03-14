import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import styles from "./WeeklySubscriberChart.module.css";
import { weeklySubscriberData } from "../../data/weeklySubscriberData";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <span>{payload[0].value} Subscribers</span>
      </div>
    );
  }
  return null;
};

const WeeklySubscriberChart = () => {
  return (
    <div className={styles.chartContainer}>
      {/* Chart Header */}
      <h3>Subscriber Analysis</h3>
      <p className={styles.subTitle}>weekly subscriber analysis</p>

      {/* Bar Chart */}
      <ResponsiveContainer width="100%" height={200}>
        <BarChart
          data={weeklySubscriberData}
          margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
        >
          <defs>
            <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A90E2" stopOpacity={1} />
              <stop offset="100%" stopColor="#9AC7FA" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip content={<CustomTooltip />} />

          {/* Gradient Bars */}
          <Bar
            dataKey="subscribers"
            fill="url(#gradientColor)"
            barSize={30}
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklySubscriberChart;
