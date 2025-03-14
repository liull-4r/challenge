import { NavLink } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineShowChart } from "react-icons/md";
import { TbMessage2Check } from "react-icons/tb";
import { CiSettings, CiLogin } from "react-icons/ci";
import styles from "./Sidebar.module.css";
import { RxFileText } from "react-icons/rx";
import { FaUserCheck } from "react-icons/fa6";
import { TbClockHour3 } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* Logo */}
      <h2 className={styles.logo}>
        One<span className={styles.pulse}>Pulse</span>
      </h2>

      {/* Sidebar Menu */}
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <MdOutlineDashboard className={styles.icon} />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/campaigns"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <MdOutlineShowChart className={styles.icon} />
            Campaigns
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/abandonment-report"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <RxFileText className={styles.icon} />
            Abandonment Report
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/active-user-report"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <FaUserCheck className={styles.icon} />
            Active User Report
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hourly-report"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <TbClockHour3 className={styles.icon} />
            Hourly Report
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <TbMessage2Check className={styles.icon} />
            Message Template
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive ? `${styles.link} ${styles.active}` : styles.link
            }
          >
            <CiSettings className={styles.icon} />
            Settings
          </NavLink>
        </li>
      </ul>

      {/* Logout Button - Always at the Bottom */}
      <div className={styles.logout}>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            isActive
              ? `${styles.logoutLink} ${styles.active}`
              : styles.logoutLink
          }
        >
          <CiLogin className={styles.icon} />
          Log Out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
