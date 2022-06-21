import React from 'react';
import styles from './InboxMailNav.module.scss';

const InboxMailNav = () => {

    return (
        <nav className={styles.mainNav}>
            <div className={styles.navItem}>
                <a href="javascript:void(0)" className={styles.navLink}>
                    <div className={styles.imgContainer}>
                        <img src="src/assets/images/clipboard.svg" alt="" />
                    </div>
                    <span className={styles.textDesc}>Primary</span>
                </a>
            </div>
            <div className={styles.navItem}>
                <a href="javascript:void(0)" className={styles.navLink}>
                    <div className={styles.imgContainer}>
                        <img src="src/assets/images/people.svg" alt="" />
                    </div>
                    <span className={styles.textDesc}>Social</span>
                </a>
            </div>
            <div className={styles.navItem}>
                <a href="javascript:void(0)" className={styles.navLink}>
                    <div className={styles.imgContainer}>
                        <img src="src/assets/images/ticket.svg" alt="" />
                    </div>
                    <span className={styles.textDesc}>Promotions</span>
                </a>
            </div>
        </nav>
    )
} 

export default InboxMailNav;