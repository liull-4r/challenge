import React from "react";
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
import { CiCalendar } from "react-icons/ci";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { PiDotsThreeBold } from "react-icons/pi";
import styles from "./LineChart.module.css";

const data = [
  { name: "Campaign 1", value: 5200 },
  { name: "Campaign 2", value: 6100 },
  { name: "Campaign 3", value: 7234 },
  { name: "Campaign 4", value: 8800 },
  { name: "Campaign 5", value: 6500 },
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
  return (
    <div className={styles.chartContainer}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.leftHeader}>
          <p className={styles.chartTitle}>
            Active Subscriber{" "}
            <AiTwotoneExclamationCircle className={styles.infoIcon} />
          </p>
        </div>

        <div className={styles.rightHeader}>
          <div className={styles.datePicker}>
            <span>March 2020</span>
            <CiCalendar className={styles.calendarIcon} />
          </div>
          <PiDotsThreeBold className={styles.dotsIcon} />
        </div>
      </div>

      {/* Chart */}
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

          {/* Background Gradient */}
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#070692" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#070692" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Shaded Area Under Line */}
          <Area
            type="basis"
            dataKey="value"
            stroke="none"
            fill="url(#colorBlue)"
          />

          {/* Corrected Zig-Zag Line */}
          <Line
            type="basis" /* Fix: Makes curves more natural */
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
