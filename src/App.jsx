import React from 'react';
import HeaderNav from './components/HeaderNav';
import SideNav from './components/SideNav';
import OtherAppsNav from './components/OtherAppsNav';
import MailSelection from './components/MailSelection';
import InboxMailContainer from './components/InboxMailContianer';
import './App.css';

const App = () => {
    return (
        <>
            <HeaderNav />
            <section className="main-container">
                <SideNav />
                <div className="inner-container">
                    <MailSelection />
                    <InboxMailContainer />
                </div>
                <OtherAppsNav />
            </section>
        </>
    )
}

export default App;
