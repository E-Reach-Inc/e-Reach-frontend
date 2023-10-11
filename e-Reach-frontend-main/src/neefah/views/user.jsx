import React, {useState} from 'react';
// import './style.css';
import '../styles/user/user.css';
import {AdminSideBar} from "../../coco/views/administration/AdminSideBar";
import {AdminSearchBar} from "../../coco/views/administration/AdminSearchBar";
import Patient from "./user/patient/patient";
import {GiHamburgerMenu} from "react-icons/gi";
import Doctor from "./user/doctor/doctor";
import Pharmacy from "./user/pharmacy/pharmacy";

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
                    <AdminSideBar />
                </div>
                <div style={{"width": "100%"}}>

                    <AdminSearchBar
                        toggleSideBar={()=>{
                            setHamburger(!isHamburger)
                        }}
                    />
                    <div className="Admin-Activity-Frame">
                        <div className="tab-container">
                            {/* Tabs */}
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
                                className={`tab ${selectedTab === 'pharmacy' ? 'active' : ''}`}
                                onClick={() => handleTabClick('pharmacy')}
                            >
                                Pharmacy
                            </div>
                        </div>
                        <div className="tabs">
                            {selectedTab === 'patients' && (
                                <div>
                                    <Patient/>
                                </div>
                            )}
                            {selectedTab === 'doctors' && (
                                <div>
                                    <Doctor/>
                                </div>
                            )}
                            {selectedTab === 'pharmacy' && (
                                <div>
                                    <Pharmacy/>
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
