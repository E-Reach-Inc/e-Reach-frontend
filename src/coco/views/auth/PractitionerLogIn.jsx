import React, { useEffect, useState } from 'react';
import eReachLogo from "../../assets/images/EReachLogoNoB.svg";
import "../../../coco/styles/auth/PractionerLogin.css"
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const initialData = {
    email: '',
    practitionerIdentificationNumber: '',
}
function LoginPage() {

    useEffect(()=>{
       
    }, [])

    const navigate = useNavigate(initialData)

    const [formData, setFormData] = useState();

    const handleInputChange = (event) => {
        // const { id, value } = event.target;
        // setFormData((prevData) => ({
        // ...prevData,
        // [id]: value,
        // }));
        setFormData((previousValue)=>({...previousValue, [event.target.id]: event.target.value}))
    };

    const handleSubmit = (e) => {
        try{ 
            const loginData = {
                email: formData.email,
                practitionerIdentificationNumber: formData.practitionerIdentificationNumber,
            }
            e.preventDefault();
            // const practitionerData = null;
            //
            //
            axios.post("http://localhost:8080/api/v1/practitioner/login/", loginData)
                .then(successResponse => {    
                    try{ 
                        localStorage.setItem("practitionerDa", JSON.stringify(successResponse.data))    
                        toast.success("Login Successful", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                        if(successResponse.data.role === "DOCTOR")
                            {console.log(successResponse.data.role)
                            navigate("/doctors-dashboard")}
                        else if(successResponse.data.role === "PHARMACIST")
                          {  console.log(successResponse.data.role)
                            navigate("/pharmacist-dashboard")}
                    }catch(error){
                        console.error(error)
                    }
                })
                .catch(failureResponse => {
                    console.error(failureResponse)
                })
                .finally(()=>{
                   
                })
        }catch(error){
            toast.info(error, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
        };
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
                            <input className="Doc-login-input-style" type="text" id="practitionerIdentificationNumber"
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
