import React, { useState } from 'react';
import axios from 'axios';
import eReachLogo from "../../../coco/assets/images/EReachLogoNoB.svg"
import "../../../coco/styles/auth/DoctorRegistration.css"
export const DoctorRegistration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        role: '',
        phoneNumber: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setFormData({
            ...formData,
            password: newPassword,
        });
        setPasswordMatch(newPassword === formData.confirmPassword);
    };

    const handlePasswordConfirmationChange = (e) => {
        const newConfirmPassword = e.target.value;
        setFormData({
            ...formData,
            confirmPassword: newConfirmPassword,
        });
        setPasswordMatch(formData.password === newConfirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword) {
            try {
                const response = await axios.post('/api/register', formData);
                if (response.status === 200) {
                    alert('Registration successful. Ready for submission.');
                } else {
                    alert('Registration failed. Please try again.');
                }
            } catch (error) {
                console.error('Error during registration:', error);
                alert('Registration failed. Please try again.');
            }
        } else {
            alert('Passwords do not match. Please try again.');
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
                                <input className="Doc-input-name-style" type="text" id="first_name" placeholder="example: John" onChange={handleChange}
                                       required/>
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

                            <p className="Doc-name-tag-input-password">Password:</p>
                            <label htmlFor="password"></label>
                            <input className="Doc-input-style" type="password" id="password" onChange={handlePasswordChange}  placeholder="*****" required/>

                            <p className="Doc-name-tag-input-confirm-password">Confirm Password:</p>
                            <label htmlFor="confirm_password"></label>
                            <input className="Doc-input-style" type="password" id="confirm_password" onChange={handlePasswordConfirmationChange}
                                   placeholder="*****" required/>
                        </div>

                        {!passwordMatch && (
                            <p style={{ color: 'red' }}>Passwords do not match.</p>
                        )}
                    </form>
                </div>
                <div className="Button-frame">
                    <button id="Doc-submit-button" onSubmit={handleSubmit} type="submit">SUBMIT</button>
                </div>
            </div>
        </div>
    )
}
