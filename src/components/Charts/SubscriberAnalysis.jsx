import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  ReferenceDot,
} from "recharts";
import styles from "./SubscriberAnalysis.module.css";
import { subscriberData } from "../../data/subscriberData";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <span>${payload[0].value}</span>
      </div>
    );
  }
  return null;
};

const SubscriberAnalysis = () => {
  return (
    <div className={styles.chartContainer}>
      {/* Chart Header */}
      <div className={styles.header}>
        <h3>Subscriber Analysis</h3>
        <div className={styles.yearSelector}>2024 ⌵</div>
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span
            className={styles.dot}
            style={{ backgroundColor: "#2C49D8" }}
          ></span>{" "}
          Active
        </div>
        <div className={styles.legendItem}>
          <span
            className={styles.dot}
            style={{ backgroundColor: "#EAB308" }}
          ></span>{" "}
          Inactive
        </div>
      </div>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={subscriberData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} domain={[5000, 10000]} />
          <Tooltip content={<CustomTooltip />} />

          {/* Active (Blue Line) */}
          <Line
            type="monotone"
            dataKey="active"
            stroke="#2C49D8"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          {/* Inactive (Yellow Line) */}
          <Line
            type="monotone"
            dataKey="inactive"
            stroke="#EAB308"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

          {/* Highlight Dot for JUL */}
          <ReferenceDot
            x="JUL"
            y={9500}
            r={8}
            fill="#2C49D8"
            stroke="#ffffff"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscriberAnalysis;
