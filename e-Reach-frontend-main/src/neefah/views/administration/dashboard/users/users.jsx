import React, {useState} from 'react';
// import './style.css';
import '../../../../styles/administration/dashboard/users/user.css';
import {UserSideBar} from "../../AdminNavAndSideBar/UserSideBar";
// import {UserSearchBar} from "../../../../../coco/views/administration/UserSearchBar";
import {UserSearchBar} from "../../AdminNavAndSideBar/UserSearchBar";
import PatientsTab from "./patientTab/patientsTab";
import {GiHamburgerMenu} from "react-icons/gi";
import DoctorsTab from "./doctorTab/doctorsTab";
import PharmacistsTab from "./pharmacistsTab/pharmacistsTab";

function Users() {
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
                                className={`tab ${selectedTab === 'pharmacistsTab' ? 'active' : ''}`}
                                onClick={() => handleTabClick('pharmacistsTab')}
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
                            {selectedTab === 'pharmacistsTab' && (
                                <div>
                                    <PharmacistsTab/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Users;
