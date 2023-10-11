import '../../styles/landingPage/landingPageNavbar.css'
import React, {useState}from "react";
import {useNavigate} from "react-router-dom";
import eReachLogo from "../../assets/pharmacistimage/ereachLogo.svg"

export const LandingPageNavbar = () => {
    const [showMenu, setShowMenu] = useState(false);

   const toogleMenu = () => {
    setShowMenu((prevShowMenu) => {
        return !prevShowMenu;
    });
}
    const navigate = useNavigate();
    
    const handleButtonClick =()=>{
        navigate("/hospital-admin-signup")
    }
    return (
        <div className="nav-wrapper">
            <div className="mainCon">
                <nav className="Navigation-div">
                    <div className="Logo-div">
                        <img src={eReachLogo} alt={"e-Reach logo"} />
                    </div>
                    <div className={`link-bars ${showMenu ? 'show-links' : 'hide-links'}`}>
                        <ul className="link-bars">
                            <li><a href="">Home</a></li>
                            <li><a href="">Social Proof</a></li>
                            <li><a href="">About Us</a></li>
                        </ul>
                    </div>
                    <button id="hamburger-button" onClick={toogleMenu}>&#9776;</button>
                    <div className='regbtn'>
                        <button id="Register-button" onClick={handleButtonClick}>Register</button>
                    </div>
                </nav>
            </div>
        </div>
    
    )
}
