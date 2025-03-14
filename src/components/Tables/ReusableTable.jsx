import { useState } from "react";
import styles from "./ReusableTable.module.css";
import { FiFilter } from "react-icons/fi";

const ReusableTable = ({ columns, data }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  // Sorting Functionality
  const handleSort = (column) => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortOrder(order);

    data.sort((a, b) => {
      if (a[column] < b[column]) return order === "asc" ? -1 : 1;
      if (a[column] > b[column]) return order === "asc" ? 1 : -1;
      return 0;
    });
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <h3>Top Performing Campaigns</h3>
        <div className={styles.tableHeader}>
          <FiFilter className={styles.filterIcon} />
          <p style={{ marginLeft: "10px", cursor: "pointer" }}>Filters</p>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} onClick={() => handleSort(col.key)}>
                  {col.label}{" "}
                  {sortColumn === col.key
                    ? sortOrder === "asc"
                      ? "↑"
                      : "↓"
                    : ""}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => (
                  <td key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReusableTable;
