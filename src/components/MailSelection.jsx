import React from 'react';
import styles from './MailSelection.module.scss';

const MailSelection = () => {
    return (
        <nav className={styles.secondaryNav}>
            <div className={styles.checkDropdown}>
                <label htmlFor="check-me" className="checkbox-container">
                    <input type="checkbox" name="" id="check-me" className="check-box" />
                    <span className="checkmark"></span>
                </label>

            </div>
            <div className={styles.dropdownContainer}>
                <button className={styles.iconContainer}>
                    <img src="src/assets/images/fill-arr-down.svg" alt="" />
                </button>
            </div>
            <div className={styles.redoContainer}>
                <button type="button" className={styles.iconContainer}>
                    <img src="src/assets/images/redo-arr.svg" alt="" />
                </button>
            </div>
            <div className={styles.moreOptions}>
                <button className={styles.iconContainer}>
                    <img src="src/assets/images/dots-vertical.svg" alt="" />
                </button>
            </div>

            <div className={styles.emailCount}>
                <span className={styles.emailNum}>
                    1-50 of 4,159
                </span>
                <div className={styles.prevToNext}>
                    <button className={`${styles.iconContainer} ${styles.prevIcon}`}>
                        <img src="src/assets/images/outline-arr-left.svg" alt="" />
                    </button>
                    <button className={`${styles.iconContainer} ${styles.nextIcon}`}>
                        <img src="src/assets/images/outline-arr-right.svg" alt="" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default MailSelection;