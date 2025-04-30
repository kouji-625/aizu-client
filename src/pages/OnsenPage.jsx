import React from "react";
import '../styles/onsen/OnsenPage.css';
import OnsenHeader from '../components/onsen/OnsenHeader';
import JsMenu from '../components/top-page/JsMenu';
import ReservedButton from '../components/top-page/ReservedButton';
import OnsenAbout from '../components/onsen/OnsenAbout';
import OnsenImages from '../components/onsen/OnsenImages';
import OnsenInfo from '../components/onsen/OnsenInfo';
import Footer from '../components/top-page/Footer';

const OnsenPage = () => {
    
    return <div>
        <OnsenHeader />
        <JsMenu />
        <ReservedButton />
        <OnsenAbout />
        <OnsenImages />
        <OnsenInfo />
        <Footer />
    </div>;
};

export default OnsenPage;