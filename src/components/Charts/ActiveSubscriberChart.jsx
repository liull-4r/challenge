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

const data = [
  { name: "Campaign 1", value: 5200 },
  { name: "Campaign 2", value: 5800 },
  { name: "Campaign 3", value: 7234 },
  { name: "Campaign 4", value: 8100 },
  { name: "Campaign 5", value: 6900 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg p-3 rounded-md text-center border border-gray-300">
        <p className="text-gray-500 text-xs">This month</p>
        <p className="text-xl font-bold text-gray-900">
          {payload[0].value.toLocaleString()}
        </p>
        <p className="text-gray-500 text-sm">May</p>
      </div>
    );
  }
  return null;
};

const ActiveSubscriberChart = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      {/* Header with Title and Date Picker */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          Active Subscriber
        </h2>

        <div className="flex items-center gap-2 text-gray-500 cursor-pointer">
          <span className="text-sm">March 2020</span>
          <CiCalendar className="text-lg" />
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#070692" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#070692" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            strokeOpacity={0.2}
          />
          <XAxis dataKey="name" tick={{ fill: "#777", fontSize: 12 }} />
          <YAxis tick={{ fill: "#777", fontSize: 12 }} />

          <Tooltip
            content={<CustomTooltip />}
            cursor={{ strokeDasharray: "3 3" }}
          />

          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#colorBlue)"
          />
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
