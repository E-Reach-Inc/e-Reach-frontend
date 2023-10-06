import "../../styles/landingPage/landingPageMainBody.css"
import React, { useEffect, useState } from 'react';
import backgroundImg from "../../assets/landingPageImage/image2.svg"
import {LandingPageNavbar} from "./landingPageNavBar.jsx"
import {LandingPageFooter} from "./landingPageFooter"
import {LandingPageAboutUs} from "./landingPageAboutUs";

export const LandingPageMainBody = () => {
    const [text, setText] = useState('Health');
    useEffect(() => {
        const textLoad = () => {
            setTimeout(() => {
                setText('Health');
            }, 0);
            setTimeout(() => {
                setText('Data');
            }, 5000);
            setTimeout(() => {
                setText('Control');
            }, 10000);
        };
        textLoad();
        const intervalId = setInterval(textLoad, 12000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className= 'mainCOntainer'>
            <div className="Main-Frame">
                <div className="Body-div">
                    <LandingPageNavbar/>
                    <div className="sub-body-div">
                        <div className="Word-div">
                            <h2>Seamless Health Management: Elevating Your Well-being Through Technology</h2>
                            <div className="h-animate">
                                <span className="text first-text">Your compass to a healthier life. Your&nbsp;</span>
                                <span className="text sec-text">{text}</span>
                            </div>
                            <div>
                                <a href="/hospital-admin-signup" ><button id="Register-button2">Get Started</button></a>
                            </div>
                        </div>
                        <div className="Image-div">
                            <img src={backgroundImg} alt="background img"/>
                        </div>
                    </div>
                </div>
                <LandingPageAboutUs/>
                <LandingPageFooter/>
            </div>
        </div>
    )
}