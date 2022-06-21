import React from "react";
import styles from "./InboxMailContainer.module.scss";
import InboxMailNav from "./InboxMailNav";
import InboxMailBlock from "./InboxMailBlock";

const InboxMailContainer = () => {
  return (
    <section className={styles.inboxMailContainer}>
      <InboxMailNav />
      <div className={styles.mailContainer}>
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
        <InboxMailBlock />
      </div>
    </section>
  );
};

export default InboxMailContainer;
