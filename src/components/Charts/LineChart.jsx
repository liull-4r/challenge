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
import styles from "./LineChart.module.css";
import { useState } from "react";

const data = [
  { name: "Campaign 1", value: 5200 },
  { name: "Campaign 2", value: 6100 },
  { name: "Campaign 3", value: 7234 },
  { name: "Campaign 4", value: 8800 },
  { name: "Campaign 5", value: 6500 }, // Ensure Campaign 5 is visible
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltipTitle}>This Month</p>
        <h2 className={styles.tooltipValue}>
          {payload[0].value.toLocaleString()}
        </h2>
        <p className={styles.tooltipSubtitle}>May</p>
      </div>
    );
  }
  return null;
};

const LineChartComponent = () => {
  const [selectedDate, setSelectedDate] = useState("March 2020");

  return (
    <div className={styles.chartContainer}>
      <div className={styles.header}>
        <h3>Active Subscriber</h3>
        <div className={styles.datePicker}>
          <span>{selectedDate}</span> 📅
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          {/* Background Grid */}
          <CartesianGrid strokeDasharray="3 3" vertical={false} />

          {/* X and Y Axis */}
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12 }}
            padding={{ left: 30, right: 30 }} /* Fix Campaign 5 visibility */
          />
          <YAxis tick={{ fontSize: 12 }} domain={[5000, 10000]} />

          {/* Tooltip */}
          <Tooltip content={<CustomTooltip />} />

          {/* Shaded Area Under Line */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="rgba(44, 73, 216, 0.2)"
          />

          {/* Corrected Zig-Zag Line */}
          <Line
            type="monotone" /* Fix: Makes curves more natural */
            dataKey="value"
            stroke="#2C49D8"
            strokeWidth={3}
            dot={{ r: 5 }}
          />

          {/* Highlight Point on Campaign 3 */}
          <ReferenceDot
            x="Campaign 3"
            y={7234}
            r={6}
            fill="#2C49D8"
            stroke="#ffffff"
            strokeWidth={2}
          />

          {/* Vertical Line on Campaign 3 */}
          <ReferenceLine
            x="Campaign 3"
            stroke="#2C49D8"
            strokeDasharray="3 3"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartComponent;
