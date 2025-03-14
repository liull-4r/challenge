import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
import { CiCalendar } from "react-icons/ci";
import { activeSubscriberData } from "../../data/activeSubscriberData";
import { AiTwotoneExclamationCircle } from "react-icons/ai";
import { PiDotsThreeBold } from "react-icons/pi";
import styles from "./ActiveSubscriberChart.module.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p className={styles.tooltipLabel}>This Month</p>
        <p className={styles.tooltipValue}>
          {payload[0].value.toLocaleString()}
        </p>
        <p className={styles.tooltipMonth}>May</p>
      </div>
    );
  }
  return null;
};

const ActiveSubscriberChart = () => {
  return (
    <div className={styles["chart-container"]}>
      <div className={styles["chart-header"]}>
        {/* <h2 className={styles["chart-title"]}> */}
          {/* Active Subscriber */}
          <AiTwotoneExclamationCircle />
        {/* </h2> */}

        <div className={styles["chart-controls"]}>
          <div className={styles["chart-date"]}>
            <span>March 2020</span>
            <CiCalendar />
          </div>
          <PiDotsThreeBold className={styles["options-icon"]} />
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={activeSubscriberData}
          margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
        >
          {/* Gradient Background Under Line */}
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#070692" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#070692" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Background Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            strokeOpacity={0.2}
          />

          {/* X & Y Axes */}
          <XAxis dataKey="name" tick={{ fill: "#777", fontSize: 12 }} />
          <YAxis tick={{ fill: "#777", fontSize: 12 }} />

          {/* Custom Tooltip */}
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ strokeDasharray: "3 3" }}
          />

          {/* Background Area Fill */}
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#colorBlue)"
          />

          {/* Zigzag Line */}
          <Line
            type="monotone"
            dataKey="value"
            stroke="#070692"
            strokeWidth={3}
            dot={{ stroke: "#070692", strokeWidth: 3, r: 6, fill: "#fff" }}
            activeDot={{
              stroke: "#070692",
              strokeWidth: 3,
              r: 8,
              fill: "#070692",
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActiveSubscriberChart;
