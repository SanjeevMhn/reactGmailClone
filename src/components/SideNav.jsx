import React from 'react';
import styles from './SideNav.module.scss';

const SideNav = () => {
    return (
        <nav className={styles.sideNav}>
            <div className={styles.composeMailContainer}>
                <button className={`${styles.composeMailBtn} ${styles.btn}`}>
                    <div className={styles.imgContainer}>
                        <img src="src/assets/images/gmail-plus.png" alt="" />
                    </div>
                    <span className={styles.descText}>
                        Compose
                    </span>
                </button>
            </div>
            <div className={styles.menuOptions}>
                <a href="javascript:void(0)" className={`${styles.menuLink} ${styles.menuActive}`}>
                    <div className={styles.iconContainer}>
                        <img src="src/assets/images/inbox.svg" alt="" />
                    </div>
                    <span className={styles.descText}>
                        Inbox
                    </span>
                </a>
                <a href="javascript:void(0)" className={styles.menuLink}>
                    <div className={styles.iconContainer}>
                        <img src="src/assets/images/star.svg" alt="" />
                    </div>
                    <span className={styles.descText}>Starred</span>
                </a>
                <a href="javascript:void(0)" className={styles.menuLink}>
                    <div className={styles.iconContainer}>
                        <img src="src/assets/images/clock-fill.svg" alt="" />
                    </div>
                    <span className={styles.descText}>Snoozed</span>
                </a>
                <a href="javascript:void(0)" className={styles.menuLink}>
                    <div className={styles.iconContainer}>
                        <img src="src/assets/images/send-icon.svg" alt="" />
                    </div>
                    <span className={styles.descText}>Sent</span>
                </a>
                <a href="javascript:void(0)" className={styles.menuLink}>
                    <div className={styles.iconContainer}>
                        <img src="src/assets/images/draft.svg" alt="" />
                    </div>
                    <span className={styles.descText}>Drafts</span>
                </a>
            </div>
        </nav>
    )
}

export default SideNav;