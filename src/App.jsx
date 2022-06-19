import React from 'react';
import HeaderNav from './components/HeaderNav';
import SideNav from './components/SideNav';
import OtherAppsNav from './components/OtherAppsNav';
import MailSelection from './components/MailSelection';
import './App.css';

const App = () => {
    return(
        <>
            <HeaderNav/>
            <section className="main-container">
                <SideNav/>
                <MailSelection/> 
                <OtherAppsNav/>
            </section>
        </>
    )
}

export default App;
