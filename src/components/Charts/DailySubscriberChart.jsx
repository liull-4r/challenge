import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceDot,
  ReferenceLine,
  Area,
} from "recharts";
import styles from "./DailySubscriberChart.module.css";
import { dailySubscriberData } from "../../data/dailySubscriberData";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <span>{payload[0].value.toLocaleString()}</span>
      </div>
    );
  }
  return null;
};

const DailySubscriberChart = () => {
  return (
    <div className={styles.chartContainer}>
      {/* Chart Header */}
      <div className={styles.header}>
        <h3>Daily Subscriber Analysis</h3>
        <div className={styles.datePicker}>
          <span>This Month</span> ⌵
        </div>
      </div>

      {/* Line Chart with Shaded Area */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={dailySubscriberData}
          margin={{ top: 20, right: 10, left: 10, bottom: 10 }}
        >
          {/* Background Grid */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* Gradient Definition */}
          <defs>
            <linearGradient id="gradientColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2C49D8" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#2C49D8" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* X and Y Axis */}
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} domain={[20000, 100000]} />

          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Shaded Area Below the Line */}
          <Area
            type="monotone"
            dataKey="subscribers"
            stroke="none"
            fill="url(#gradientColor)"
          />

          {/* Main Line */}
          <Line
            type="monotone"
            dataKey="subscribers"
            stroke="#2C49D8"
            strokeWidth={3}
            dot={{ r: 3 }}
          />

          {/* Highlight Peak Point */}
          <ReferenceDot
            x={16}
            y={83234}
            r={8}
            fill="#2C49D8"
            stroke="#ffffff"
            strokeWidth={2}
          />

          {/* Vertical Line for Peak */}
          <ReferenceLine x={16} stroke="red" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DailySubscriberChart;
