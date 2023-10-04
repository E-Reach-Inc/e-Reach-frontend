import React from 'react';
import eReachLogo from "../../assets/pharmacistimage/ereachLogo.svg";
import "../../styles/landingPage/landingPageFooter.css"


export const LandingPageFooter = () => {

    return(
        <div className= "MainFooter-con">
            <div className= "Body-footer">
                <div className= 'footer'>
                    <div className= 'logo'>
                        <img src={eReachLogo} alt= "logo"/>
                    </div>
                    <div className= "explore">
                        <p id= "footer-header">QUICK-LINKS</p>
                        <ul>
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Portfolio</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className= "services">
                        <p id= "footer-header">SERVICES</p>
                        <ul>
                            <li>Patient Record Management</li>
                            <li>Clinical Documentation</li>
                            <li>Interoperability</li>
                            <li>Clinical Support</li>
                        </ul>
                    </div>
                    <div className= "contact">
                        <p id= "footer-header">CONTACT</p>
                        <ul>
                            <p>e-reachinc@gmail.com</p>
                        </ul>
                    </div>
                </div>
                <div className='footer-copyright'>
                    <p>Copyright @2023 All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};