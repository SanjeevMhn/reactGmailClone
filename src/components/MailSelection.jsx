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
                <button className="icon-container">
                    <img src="src/assets/images/fill-arr-down.svg" alt="" />
                </button>
            </div>
            <div className={styles.redoContainer}>
                <button type="button" className="icon-container">
                    <img src="src/assets/images/redo-arr.svg" alt="" />
                </button>
            </div>
            <button className={`${styles.moreOptions} ${styles.iconContainer}`}>
                <img src="" alt="" />
            </button>

            <div className={styles.emailCount}>
                <span className={styles.emailNum}>
                    1-50 of 4,159
                </span>
                <div className={styles.prevToNext}>
                    <button className={`${styles.iconContainer} ${styles.prevIcon}`}>
                        <img src="" alt="" />
                    </button>
                    <button className={`${styles.iconContainer} ${styles.nextIcon}`}>
                        <img src="" alt="" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default MailSelection;