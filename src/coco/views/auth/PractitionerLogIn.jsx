import React, { useState } from 'react';
import eReachLogo from "../../assets/images/EReachLogoNoB.svg";
import "../../../coco/styles/auth/PractionerLogin.css"
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function LoginPage() {

    const navigate = useNavigate()
    const parameter = useParams()
    const role = parameter.role

    const [formData, setFormData] = useState({
        username: '',
        identityNumber: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        const loginData = {
            username: formData.username,
            identityNumber: formData.identityNumber,
            role: role
        }
        e.preventDefault();
       try{ axios.post("http://e-reach-prod.up.railway.app/api/v1/practitioner/login", formData)
            .then(successResponse => {
                toast.success("Login Successful", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
            })
            .catch(failureResponse => {

            })
            .finally(()=>{
                if(role === "doctor")
                    navigate("doctor-dashboard")
                else if(role === "pharmacist")
                    navigate("pharmacist-dashboard")
            })
        console.log('Form Data:', formData);
        }catch(error){
            toast.info(error, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
    };

    return (
        <div className="Doc-login-Main-Reg-Frame">
            <ToastContainer/>
            <div className="Doc-login-Sub-Main-Reg-Frame">
                <div className="Doc-login-Logo-frame">
                    <img src={eReachLogo} alt={"e-Reach logo"}/>
                </div>
                <div className="Doc-login-Header-frame">
                    <h1> PRACTITIONER'S LOGIN</h1>
                </div>
                <div className="Doc-login-Form-frame">
                    <form onSubmit={handleSubmit}>
                        <div className="Doc-login-user-info">
                            <p className="Doc-name-tag-input-email">Username:</p>
                            <label htmlFor="username"></label>
                            <input className="Doc-login-input-style" type="email" id="email_address"
                                   value={formData.username}
                                   onChange={handleInputChange}
                                   placeholder="example: sample@gmail.com" required/>

                            <p className="Doc-name-tag-input-email">Identity Number:</p>
                            <label htmlFor="identity_number"></label>
                            <input className="Doc-login-input-style" type="text" id="identity_number"
                                   value={formData.identityNumber}
                                   onChange={handleInputChange}
                                   placeholder="enter your identity number" required/>
                        </div>
                        <button  id="Doc-login-submit-button" onSubmit={handleSubmit} type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
    }
}

export default LoginPage;
