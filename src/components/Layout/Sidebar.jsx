import { NavLink } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineShowChart } from "react-icons/md";
import { TbMessage2Check } from "react-icons/tb";
import { CiSettings, CiLogin } from "react-icons/ci";
import styles from "./Sidebar.module.css";
import { RxFileText } from "react-icons/rx";
import { FaUserCheck } from "react-icons/fa6";
import { TbClockHour3 } from "react-icons/tb";
import logo from "../../assets/logo.jpg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* <h1 className={styles.logo}> */}
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>

      <hr className={styles.break} />

      {/* Sidebar Menu */}
      <ul className={styles.menu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? ` ${styles.active}` : "")}
          >
            <MdOutlineDashboard className={styles.icon} />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/campaigns"
            className={({ isActive }) => (isActive ? ` ${styles.active}` : "")}
          >
            <MdOutlineShowChart className={styles.icon} />
            Campaigns
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/abandonment-report"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <RxFileText className={styles.icon} />
            Abandonment Report
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/active-user-report"
            className={({ isActive }) => (isActive ? ` ${styles.active}` : "")}
          >
            <FaUserCheck className={styles.icon} />
            Active User Report
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hourly-report"
            className={({ isActive }) => (isActive ? ` ${styles.active}` : "")}
          >
            <TbClockHour3 className={styles.icon} />
            Hourly Report
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/messages"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
          >
            <TbMessage2Check className={styles.icon} />
            Message Template
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? `${styles.active}` : "")}
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
          className={({ isActive }) => (isActive ? ` ${styles.active}` : "")}
        >
          <CiLogin className={styles.icon} />
          Log Out
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
