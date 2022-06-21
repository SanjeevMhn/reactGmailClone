import React from "react";
import styles from "./InboxMailBlock.module.scss";

const InboxMailBlock = () => {
  return (
    <div className={styles.mailBlock}>
      <label htmlFor="check-me-mail" className="checkbox-container">
        <input type="checkbox" name="" id="check-me-mail" />
        <span className="checkmark"></span>
      </label>
      <div className={styles.starredContainer}>
        <div className={styles.imgContainer}>
          <img src="src/assets/images/star-outline.svg" alt="" />
        </div>
      </div>
      <div className={styles.mailSenderContainer}>
        <h2 className={styles.mailSender}>John Doe</h2>
      </div>
      <div className={styles.mailTitleContainer}>
        <h2 className={styles.mailTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed est repellendus vitae rem soluta quos?
        </h2>
      </div>
      <div className={styles.mailSentTimeContainer}>
        <h2 className={styles.mailSentTime}>9:42 PM</h2>
      </div>
    </div>
  );
};

export default InboxMailBlock;
