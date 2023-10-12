import React, { useState } from 'react';
import axios from 'axios';
import eReachLogo from "../../../coco/assets/images/EReachLogoNoB.svg"
import "../../styles/auth/PractitionerRegistration.css"
import {ToastContainer, toast} from "react-toastify";

export const PractitionerRegistration = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        phoneNumber: '',
        email: '',
        hospitalEmail: ''
    });

    const[registrationCompleted, setRegistrationCompleted] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("hello tue tue")
        const practitionerDetails= {
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: formData.role,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            hospitalEmail: localStorage.getItem("hospitalEmail")
        }
        
        try {
            console.log("hello boys tue tue")
            axios.post('http://localhost:8080/api/v1/hospital-admin/invite-practitioner/', practitionerDetails)
                .then(successResponse => {
                    toast.success(
                        successResponse+' Registration successful. Ready for submission.',
                        {position: toast.POSITION.TOP_CENTER, autoClose: 5000}
                    );
                    setRegistrationCompleted(true)
                })
                .catch(failureResponse => {
                    console.log("hello girls tue tue")
                    toast.error(
                        failureResponse+' Registration failed. Please try again.',
                        {position: toast.POSITION.TOP_CENTER, autoClose: 5000}
                    );
                })
                .finally(()=>{

                });
            } catch (error) {
                console.error('Error during registration:', error);
                toast.error(error, toast.error('Registration failed. Please try again.',
                    {position: toast.POSITION.TOP_CENTER, autoClose: 5000}));
            }
    };

    function handleChangeForInputs(event){
        event.preventDefault();
        const { name, value } = event.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));

    }

    return(
        <div className="Doc-Main-Reg-Frame">
            <ToastContainer/>
            {registrationCompleted === false ? (
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
                                <input name='firstName' className="Doc-input-name-style" onChange={handleChangeForInputs} type="text" id="first_name" placeholder="example: John" required/>
                            </div>

                            <div>
                                <p className="Doc-name-tag">Last name:</p>
                                <label htmlFor="last_name"></label>
                                <input name='lastName' className="Doc-input-name-style" onChange={handleChangeForInputs} type="text" id="last_name" placeholder="example: MICHAELS" required/>
                            </div>
                        </div>
                        <div id="Doc-user_info">
                            <p className="Doc-name-join-tag">You Are Joining As?</p>
                            <label htmlFor="role" id="role">
                                <select name='role' className="Doc-input-role-style" onSelect={handleChangeForInputs}>
                                    <option disabled>Role</option>
                                    <option>Doctor</option>
                                    <option>Pharmacist</option>
                                    <option>Lab Technician</option>
                                    <option>Front Desk Officer</option>
                                </select>
                            </label>

                            <p className="Doc-name-tag-input-phoneNumber">Phone Number:</p>
                            <label htmlFor="phone_number"></label>
                            <input name='phoneNumber' className="Doc-input-style" onChange={handleChangeForInputs} type="text" id="phone_number" placeholder="example: 07000000000" required/>

                            <p className="Doc-name-tag-input-email">Email address:</p>
                            <label htmlFor="email_address"></label>
                            <input name='email' className="Doc-input-style" onChange={handleChangeForInputs} type="email" id="email_address" placeholder="example: sample@gmail.com" required/>
                        </div>
                        <div className="Button-frame">
                            <button id="Doc-submit-button" onSubmit={handleSubmit} type="submit">SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            ): (<div className='Main-Registration-Complete-Form'>
                    <h3 className='Inner-Registration_h3'>Registration Successful</h3>
                    <p className='Inner-Registration_Ptag'>{formData.role} {formData.firstName+ " " +formData.lastName} is successfully registered as a practitioner
                    they will receive a mail to login to their account
                    </p>
            </div>)}
        </div>
    )
}
