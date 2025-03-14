import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./PieChart.module.css";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <h4 className={styles.tooltipTitle}>{payload[0].name}</h4>
        <h2 className={styles.tooltipValue}>
          {payload[0].value.toLocaleString()}
        </h2>
      </div>
    );
  }
  return null;
};

const PieChartComponent = ({ title, data }) => {
  return (
    <div className={styles.pieContainer}>
      {/* Header with Title & Date Picker */}
      <div className={styles.header}>
        <h6>{title}</h6>
        <div className={styles.datePicker}>
          <span>March 2020</span> 📅
        </div>
      </div>

      {/* Donut Chart */}
      <ResponsiveContainer width={250} height={250}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60} /* Creates Donut Shape */
            outerRadius={80}
            paddingAngle={5}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className={styles.legend}>
        {data.map((entry, index) => (
          <div key={index} className={styles.legendItem}>
            <div className={styles.legendLabel}>
              <span
                className={styles.dot}
                style={{ backgroundColor: entry.color }}
              ></span>
              <span className={styles.text}>{entry.name}</span>
            </div>
            <span className={styles.percent}>
              {(
                (entry.value / data.reduce((acc, cur) => acc + cur.value, 0)) *
                100
              ).toFixed(0)}
              %
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
