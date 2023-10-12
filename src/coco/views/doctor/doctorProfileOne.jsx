import React, {useState} from 'react';
import DoctorProfilePic from "../../../coco/assets/icons/doc-profile-man.svg"
import {DoctorSideBar} from "./doctorSideBar";
import {SearchBar} from "./doctorSearchBar";
import "../../../coco/styles/doctor/doctorProfileOne.css"

export const DoctorProfileOne =()=>{
    const [doctorData, setDoctorData] = useState({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        phoneNumber: "",
        doctorId: "",
        hospitalId: "",
    });

    return(
        <div className="Doc-Profile-Main-Frame">
            <div className="doc-side-bar-hold">
                <DoctorSideBar/>
            </div>
            <div className="doc-second-side">
                <div className="doc-search-bar-hold">
                    <SearchBar/>
                </div>
                <div className="doc-profile-details-holder">
                    <div className="doc-left-profile">
                        <div className="doc-title" >
                            <h2>Doctor Information</h2>
                        </div>
                        <div  className="doc-biodata">
                            <div>
                                <div className="doc-profile-image">
                                    <img src={DoctorProfilePic} alt={DoctorProfilePic}/>
                                </div>
                                <button id="upload-image-doc">upload image</button>
                            </div>

                            <div className="doc-bio-input">
                                <div  className="doc-biodata-field">
                                    <label id="doc-name">First Name :</label>
                                    <span>{doctorData.firstName}</span>
                                </div>
                                <div className="doc-biodata-field">
                                    <label>Last Name :</label>
                                    <span>{doctorData.lastName}</span>
                                </div>
                                <div className="doc-biodata-field">
                                    <label>Role:</label>
                                    <span>{doctorData.role}</span>
                                </div>
                                <div className="doc-biodata-field">
                                    <label>Email :</label>
                                    <span>{doctorData.email}</span>
                                </div>
                                <div className="doc-biodata-field">
                                    <label>Phone Number :</label>
                                    <span>{doctorData.phoneNumber}</span>
                                </div>
                                <div className="doc-biodata-field">
                                    <label>Doctor Id :</label>
                                    <span>{doctorData.doctorId}</span>
                                </div>
                                <div className="doc-biodata-field">
                                    <label>Hospital Id :</label>
                                    <span>{doctorData.hospitalId}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
