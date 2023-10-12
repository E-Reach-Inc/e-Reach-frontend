import React, {useState} from 'react';
// import './style.css';
import '../../../styles/administration/userSideAndNavBar/user.css';
import '../../../styles/administration/userSideAndNavBar/userSearchBar.css'
import PatientsTab from "./users/patientsTab/patientsTab";
import {GiHamburgerMenu} from "react-icons/gi";
import DoctorsTab from "./users/doctorsTab/doctorsTab";
import PharmacistTab from "./users/pharmacistTab/pharmacistTab";
import UserSideBar from "../userSearchAndNavBar/userSideBar";
import UserSearchBar from "../userSearchAndNavBar/userSearchBar";

function User() {
    const [selectedTab, setSelectedTab] = useState('patients');
    const [isHamburger, setHamburger] = useState(false);

    const handleTabClick = (tabName) => {
        setSelectedTab(tabName);
    };

    return (
        <>
            <div className="admin-main-frame">
                <div
                    className={isHamburger ? "side-bar-open" : "side-bar-closed"}
                >
                    <UserSideBar />
                </div>
                <div style={{"width": "100%"}}>

                    <UserSearchBar
                        toggleSideBar={()=>{
                            setHamburger(!isHamburger)
                        }}
                    />
                    <div className="Admin-Activity-Frame">
                        <div className="Tabs">
                            <div
                                className={`tab ${selectedTab === 'patients' ? 'active' : ''}`}
                                onClick={() => handleTabClick('patients')}
                            >
                                Patients
                            </div>
                            <div
                                className={`tab ${selectedTab === 'doctors' ? 'active' : ''}`}
                                onClick={() => handleTabClick('doctors')}
                            >
                                Doctors
                            </div>
                            <div
                                className={`tab ${selectedTab === 'pharmacistTab'? 'active' : ''}`}
                                onClick={() => handleTabClick('pharmacistTab')}
                            >
                                Pharmacy
                            </div>
                        </div>
                        <div className="tabs">
                            {selectedTab === 'patients' && (
                                <div>
                                    <PatientsTab/>
                                </div>
                            )}
                            {selectedTab === 'doctors' && (
                                <div>
                                    <DoctorsTab/>
                                </div>
                            )}
                            {selectedTab === 'pharmacistTab' && (
                                <div>
                                    <PharmacistTab/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default User;
