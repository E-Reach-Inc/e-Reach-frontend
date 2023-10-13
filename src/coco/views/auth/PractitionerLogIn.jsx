import React, { useEffect, useState } from 'react';
import eReachLogo from "../../assets/images/EReachLogoNoB.svg";
import "../../../coco/styles/auth/PractionerLogin.css"
import { useNavigate } from 'react-router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


function LoginPage() {

    useEffect(()=>{
        console.log("Hi")
        console.log("hello")
    }, [])

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        patientIdentificationNumber: '',
    });

    const handleInputChange = (event) => {
        setFormData((previousValue)=>({...previousValue, [event.target.id]: event.target.value}))
    };

    const handleSubmit = (e) => {
        try{ 
            const loginData = {
                username: formData.email,
                patientIdentificationNumber: formData.patientIdentificationNumber,
            }
            e.preventDefault();
            let practitionerData = null;
            axios.post("https://e-reach-prod.up.railway.app/api/v1/practitioner/login", loginData)
                .then(successResponse => {
                    try{ 
                        localStorage.setItem("practitionerData", successResponse.data)
                        toast.success("Login Successful", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                        practitionerData = successResponse.data;
                    }catch(error){
                        console.error(error)
                    }
                })
                .catch(failureResponse => {
                    console.error(failureResponse)
                })
                .finally(()=>{
                    try{
                        if(practitionerData.data.role === "doctor")
                            navigate("/doctors-dashboard")
                        else if(practitionerData.data.role === "pharmacist")
                            navigate("pharmacist-dashboard")
                    }
                    catch(error){
                        console.error(error)
                    }
                })
            console.log('Form Data:', formData);
        }catch(error){
            toast.info(error, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
        }
    }
    return (
        <div className="Doc-login-Main-Reg-Frame">
            <ToastContainer/>
            <div className="Doc-login-Sub-Main-Reg-Frame">
                <div className="Doc-login-Logo-frame">
                    <img src={eReachLogo} alt={"e-Reach logo"}/>
                </div>
                <div className="Doc-login-Header-frame">
                    <h1> PRACTITIONER'S LOGIN </h1>
                </div>
                <div className="Doc-login-Form-frame">
                    <form onSubmit={handleSubmit}>
                        <div className="Doc-login-user-info">
                            <p className="Doc-name-tag-input-email">Email:</p>
                            <label htmlFor="username"></label>
                            <input className="Doc-login-input-style" type="email" id="email"
                                   onChange={handleInputChange}
                                   placeholder="example: sample@gmail.com" required/>

                            <p className="Doc-name-tag-input-email">Identity Number:</p>
                            <label htmlFor="identity_number"></label>
                            <input className="Doc-login-input-style" type="text" id="patientIdentificationNumber"
                                   onChange={handleInputChange}
                                   placeholder="enter your identity number" required
                            />
                        </div>
                        <button  id="Doc-login-submit-button" type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
    
}

export default LoginPage;
