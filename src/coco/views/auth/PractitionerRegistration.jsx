import React, { useState } from 'react';
import axios from 'axios';
import eReachLogo from "../../../coco/assets/images/EReachLogoNoB.svg"
import "../../styles/auth/PractitionerRegistration.css"
import {toast} from "react-toastify";
export const PractitionerRegistration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        phoneNumber: '',
        email: '',
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
            try {
               await axios.post('http://localhost:8080/api/v1/hospital-admin/invite-practitioner/', formData)
                   .then(successResponse => {
                       toast.success(
                           successResponse+' Registration successful. Ready for submission.',
                           {position: toast.POSITION.TOP_CENTER, autoClose: 5000});

                    })
                   .catch(failureResponse => {
                       toast.error(
                           failureResponse+' Registration failed. Please try again.',
                           {position: toast.POSITION.TOP_CENTER, autoClose: 5000});
                    })
                    .finally();
            } catch (error) {
                console.error('Error during registration:', error);
                toast.error(error, toast.error('Registration failed. Please try again.',
                    {position: toast.POSITION.TOP_CENTER, autoClose: 5000}));
            }
    };

    return(
        <div className="Doc-Main-Reg-Frame">
            <div className="Doc-Sub-Main-Reg-Frame">
                <div className="Doc-Logo-frame">
                    <img src={eReachLogo} alt={"e-Reach logo"}/>
                </div>
                <div className="Doc-Header-frame">
                    <h1> PRACTITIONER'S REGISTRATION</h1>
                    <h2>Please fill the form below carefully and with precision.</h2>
                </div>
                <div className="Doc-Form-frame">
                    <form onSubmit={handleSubmit} id="form">
                        <div className="Doc-first-and-last-name-div">
                            <div>
                                <p className="Doc-name-tag">First name:</p>
                                <label htmlFor="first_name"></label>
                                <input className="Doc-input-name-style" type="text" id="first_name" placeholder="example: John" required/>
                            </div>

                            <div>
                                <p className="Doc-name-tag">Last name:</p>
                                <label htmlFor="last_name"></label>
                                <input className="Doc-input-name-style" type="text" id="last_name" placeholder="example: MICHAELS" required/>
                            </div>
                        </div>
                        <div id="Doc-user_info">
                            <p className="Doc-name-join-tag">You Are Joining As?</p>
                            <label htmlFor="role" id="role">
                                <select className="Doc-input-role-style">
                                    <option disabled>Role</option>
                                    <option>Doctor</option>
                                    <option>Pharmacist</option>
                                    <option>Lab Technician</option>
                                    <option>Front Desk Officer</option>
                                </select>
                            </label>

                            <p className="Doc-name-tag-input-phoneNumber">Phone Number:</p>
                            <label htmlFor="phone_number"></label>
                            <input className="Doc-input-style" type="text" id="phone_number" placeholder="example: 07000000000" required/>

                            <p className="Doc-name-tag-input-email">Email address:</p>
                            <label htmlFor="email_address"></label>
                            <input className="Doc-input-style" type="email" id="email_address" placeholder="example: sample@gmail.com" required/>
                        </div>
                    </form>
                </div>
                <div className="Button-frame">
                    <button id="Doc-submit-button" onSubmit={handleSubmit} type="submit">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}
