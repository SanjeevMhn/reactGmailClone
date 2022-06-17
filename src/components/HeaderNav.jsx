import React from 'react';
import styles from './HeaderNav.module.scss';

const HeaderNav = () => {

    return (
        <nav className={styles.topNav}>
            <div className={styles.navBrand}>
                <button className={`${styles.sideNavToggler} ${styles.btn}`}>
                    <div className={styles.iconContainer}>
                        <img src="src/assets/images/list.svg" alt="" />
                    </div>
                </button>
                <a href="javascript:void(0)" className={`${styles.brandLogo} ${styles.imgContainer}`}>
                    <img src="src/assets/images/gmail-img.png" alt="" />
                </a>
            </div>

            <div className={styles.searchInputContainer}>
                <span className={`${styles.iconContainer} ${styles.searchIcon}`}>
                    <img src="src/assets/images/search.svg" alt="" />
                </span>
                <input type="text" name="" id="" className={styles.searchInput} placeholder="Search Mail" />
                <span className={`${styles.iconContainer} ${styles.searchOptions}`}>
                    <img src="src/assets/images/sliders.svg" alt="" />
                </span>
            </div>

            <div className={styles.userSettings}>
                <button className={`${styles.supportLink} ${styles.btn}`}>
                    <div className={styles.iconContainer}>
                        <img src="src/assets/images/question-circle.svg" alt="" />
                    </div>
                </button>
                <button className={`${styles.settingsBtn} ${styles.btn}`}>
                    <div className={styles.iconContainer}>
                        <img src="src/assets/images/settings.svg" alt="" />
                    </div>
                </button>
                <button className={`${styles.otherAppsBtn} ${styles.btn}`}>
                    <div className={styles.iconContainer}>
                        <img src="src/assets/images/sliders.svg" alt="" />
                    </div>
                </button>
                <button className={`${styles.userProfile} ${styles.btn}`}>
                    <div className={styles.profileContainer}>
                        <img src="https://randomuser.me/api/portraits/women/4.jpg" alt="" />
                    </div>
                </button>
            </div>
        </nav>
    )
}

export default HeaderNav;