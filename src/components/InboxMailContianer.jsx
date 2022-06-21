import React from 'react';
import styles from './InboxMailContainer.module.scss';
import InboxMailNav from './InboxMailNav';

const InboxMailContainer = () => {

    return(
        <section className={styles.inboxMailContainer}>
            <InboxMailNav />
            <h2>Hello</h2>
        </section>
    )
}

export default InboxMailContainer;