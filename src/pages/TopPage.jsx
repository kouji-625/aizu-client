import React from "react";
import MainVisual from "../components/top-page/MainVisual";
import JsMenu from "../components/top-page/JsMenu";
import ReservedButton from "../components/top-page/ReservedButton";
import Concept from "../components/top-page/Concept";
import InfoArea from "../components/top-page/InfoArea";
import OnsenTopPage from "../components/top-page/OnsenTopPage";
import Facility from "../components/top-page/Facility";
import Room from "../components/top-page/Room";
import Foods from "../components/top-page/Foods";
import Gallery from "../components/top-page/Gallery";
import Footer from "../components/top-page/Footer";


const TopPage = () => {
    return <div>
        <MainVisual />
        <JsMenu />
        <ReservedButton />
        <Concept />
        <InfoArea />
        <OnsenTopPage />
        <Facility />
        <Room />
        <Foods />
        <Gallery />
        <Footer />
          </div>;
};

export default TopPage;