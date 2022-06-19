import React from "react";
import styles from "./OtherAppsNav.module.scss";

const OtherAppsNav = () => {
  return (
    <nav className={styles.rightNav}>
      <div className={styles.appsList}>
        <a href="javascript:void(0)" className={styles.appListLink}>
            <img src="/src/assets/images/calendar.png" alt="" />
        </a>
        <a href="javascript:void(0)" className={styles.appListLink}>
            <img src="/src/assets/images/keep.png" alt="" />
        </a>
        <a href="javascript:void(0)" className={styles.appListLink}>
            <img src="/src/assets/images/tasks.png" alt="" />
        </a>
        <a href="javascript:void(0)" className={styles.appListLink}>
            <img src="/src/assets/images/contacts.png" alt="" />
        </a>
      </div>
    </nav>
  );
};

export default OtherAppsNav;
