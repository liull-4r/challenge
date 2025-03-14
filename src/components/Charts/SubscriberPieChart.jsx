import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import styles from "./SubscriberPieChart.module.css";
import { pieSubscriberData } from "../../data/pieSubscriberData";

const SubscriberPieChart = () => {
  return (
    <div className={styles.pieContainer}>
      {/* Chart Header */}
      <h3>Subscriber Analysis</h3>
      <p className={styles.subTitle}>weekly subscriber analysis</p>

      {/* Pie Chart */}
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={pieSubscriberData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            innerRadius={0}
          >
            {pieSubscriberData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className={styles.legend}>
        {pieSubscriberData.map((entry, index) => (
          <div key={index} className={styles.legendItem}>
            <span
              className={styles.dot}
              style={{ backgroundColor: entry.color }}
            ></span>
            {entry.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriberPieChart;
