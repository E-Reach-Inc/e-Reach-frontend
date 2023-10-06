import '../../styles/landingPage/landingPageNavbar.css'
import eReachLogo from "../../assets/pharmacistimage/eReachLogoNoB.svg";
import React from "react";
import {useNavigate} from "react-router-dom";

export const LandingPageNavbar = () => {
    const navigate = useNavigate();
    
    const handleButtonClick =()=>{
        navigate("/HospitalAdminSignUp")
    }
    return (
        <div className="nav-wrapper">
            <div className= 'mainCon'>
                <nav className="Navigation-div">
                    <div className="Logo-div">
                        <img src={eReachLogo} alt={"e-Reach logo"}/>
                    </div>
                    <div className="Info-div">
                        <ul className="link-bars">
                            <li><a href="">Home</a></li>
                            <li><a href="">Social Proof</a></li>
                            <li><a href="">About Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <button id="Register-button" onClick={handleButtonClick}>Register</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}