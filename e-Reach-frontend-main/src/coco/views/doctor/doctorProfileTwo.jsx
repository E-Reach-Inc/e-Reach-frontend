import React, {useState} from "react";
import "../../../coco/styles/doctor/doctorProfileTwo.css"
import DoctorProfilePic from "../../../coco/assets/icons/doc-profile.svg"
import {useNavigate} from "react-router-dom";


export const DoctorProfileTwo =()=>{
    const [doctorData, setDoctorData] = useState({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        phoneNumber: "",
        doctorId: "",
        hospitalId: "",
    });


    const navigateToProfile = useNavigate();
    const handleButtonClick =()=>{
        navigateToProfile("/DocProfile")
    }
    return(
        <div>
            <div className= 'doc-profile-hold2'>
                <div className= "doc-profile-holder2">
                    <div className="doc-profile-browse-navigate-button">
                        <div className= 'doc-profile-text'>
                            <h3>Profile</h3>
                        </div>
                        {/*<div className="browse-all-button">*/}
                        {/*    <button onClick={handleButtonClick} id="browse-all-button-doc">Browse All</button>*/}
                        {/*</div>*/}
                    </div>

                    <div className= "doc-profile-holder-section2">
                        <div>
                            <div className= 'doc-profile-image2'>
                                <img src={DoctorProfilePic} alt={'doctorsTab'}/>
                            </div>
                            <button id="upload-profile-image-doc">upload</button>
                        </div>

                        <div className="doc-bio-input-dash">
                            <h3>Full Name:{doctorData.firstName}{doctorData.lastName}</h3>
                            <div className= 'doc-profile-role-text'>
                                <p>Role: {doctorData.role}</p>
                            </div>
                            <div className= 'doc-profile-email-text'>
                                <p>Email: {doctorData.email}</p>
                            </div>
                            <div className= 'doc-profile-phone-text'>
                                <p>Phone Number:{doctorData.phoneNumber}</p>
                            </div>
                            <div className= 'doc-profile-docId-text'>
                                <p>Doctor id: {doctorData.doctorId}</p>
                            </div>
                            <div className= 'doc-profile-hospital-text'>
                                <p>Hospital id: {doctorData.hospitalId}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
