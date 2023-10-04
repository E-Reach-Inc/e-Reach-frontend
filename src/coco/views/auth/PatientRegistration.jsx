import React, { useState } from "react";
import axios from "axios";
import eReachLogo from "../../assets/images/EReachLogoNoB.svg"
import "../../styles/auth/PatientRegistration.css"

export const PatientDetailsReg = () => {
    const initialValue = {
        firstName: "",
        lastName: "",
        nin: "",
        email: "",
        phoneNumber: "",
        houseNumber: "",
        streetName: "",
        state: "",
        country: "",
    };

    const [currentStep, setCurrentStep] = useState(1);
    const [data, setData] = useState(initialValue);

    const onChangeHandler = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const patientDetails = {
            firstName: data.firstName,
            lastName: data.lastName,
            nin: data.nin,
            email: data.email,
            phoneNumber: data.phoneNumber,
            houseNumber: data.houseNumber,
            streetName: data.streetName,
            state: data.state,
            country: data.country,
        };

        console.log( patientDetails);

        const response = await axios.post
        ("http://localhost:8080/api/v1/patient/create-patient/", patientDetails);
        console.log(response.data);
    };
    const progressBar= ()=>{
        if (currentStep === 1){
            return barOne()
        }
        else if(currentStep === 2){
            return barTwo()
        }
        else if(currentStep === 3){
            return barThree()
        }
    }

    const barOne=()=>{
        return <div className="Patient-progressBar">
            <div className="Patient-blueCircle">1</div>
            <div className="Patient-whiteBar"></div>
            <div className="Patient-whiteCircle">2</div>
            <div className="Patient-whiteBar"></div>
            <div className="Patient-whiteCircle">3</div>
        </div>
    }
    const barTwo=()=>{
        return <div className="Patient-progressBar">
            <div className="Patient-blueCircle">1</div>
            <div className="Patient-blueBar"></div>
            <div className="Patient-blueCircle">2</div>
            <div className="Patient-whiteBar"></div>
            <div className="Patient-whiteCircle">3</div>
        </div>
    }
    const barThree=()=>{
        return <div className="Patient-progressBar">
            <div className="Patient-blueCircle">1</div>
            <div className="Patient-blueBar"></div>
            <div className="Patient-blueCircle">2</div>
            <div className="Patient-blueBar"></div>
            <div className="Patient-blueCircle">3</div>
        </div>
    }

    const conditional =()=>{

        if (currentStep === 1){
            return first()
        }
        else if(currentStep === 2){
            return second()
        }
        else if(currentStep === 3){
            return third()
        }
    }
    const handleNext=()=>{
        setCurrentStep(currentStep + 1);
    }
    const handlePrev=()=>{
        setCurrentStep(currentStep -1);
    }
    const handleSubmit=()=>{
        const patientDetails = {
            firstName: data.firstName,
            lastName: data.lastName,
            nin: data.nin,
            email: data.email,
            phoneNumber: data.phoneNumber,
            houseNumber: data.houseNumber,
            streetName: data.streetName,
            state: data.state,
            country: data.country,
        };
        console.log(patientDetails);
    }


    const first=()=>{
        return <div className="Patient_user_info">
            <form onSubmit={onSubmitHandler} className="details">
                <label className="name-tag-p">First Name</label>
                <input className="Patient-input-style" name="firstName" type="text" value={data.firstName} onChange={onChangeHandler} />
                <label className="name-tag-p">Last Name</label>
                <input className="Patient-input-style" name="lastName" type="text" value={data.lastName} onChange={onChangeHandler} />
                <label className="name-tag-nin">N.I.N</label>
                <input className="Patient-input-style" name="nin" type="text" value={data.nin} onChange={onChangeHandler} />
                <div id= "Patient-buttons"><button id="Patient-initial-next-button" onClick={handleNext}>next</button></div>
            </form>
        </div>
    }
    const second=()=>{
        return <div className="Patient_user_info">

            <form onSubmit={onSubmitHandler} className="details">
                <label className="name-tag-country">Country</label>
                <input className="Patient-input-style" name="country" type="text" value={data.country} onChange={onChangeHandler} />
                <label className="name-tag-email">Email </label>
                <input className="Patient-input-style" name="email" type="text" value={data.email} onChange={onChangeHandler} />
                <label className="name-tag-phone">Phone Number</label>
                <input className="Patient-input-style" name="phoneNumber" type="text" value={data.phoneNumber} onChange={onChangeHandler} />
                <div id= "Patient-buttons"><button id="Patient-previous-button" onClick={handlePrev}>previous</button>
                    <button id="Patient-next-button" onClick={handleNext} >next</button></div>
            </form>
        </div>
    }
    const third=()=>{
        return <div className="Patient_user_info">

            <form onSubmit={onSubmitHandler} className="details">
                <label className="name-tag-number">House Number</label>
                <input className="Patient-input-style" name="houseNumber" type="text" value={data.houseNumber} onChange={onChangeHandler} />
                <label className="name-tag-number">Street Number</label>
                <input className="Patient-input-style" name="streetName" type="text" value={data.streetName} onChange={onChangeHandler} />
                <label className="name-tag-media">Social media</label>
                <input className="Patient-input-style" name="state" type="text" value={data.state} onChange={onChangeHandler} />
                <div id= "Patient-buttons"><button id="Patient-previous-button" onClick={handlePrev}>previous</button>
                    <button id="Patient-submit-button" onClick={handleSubmit}>submit</button></div>
            </form>
        </div>
    }



    return (
        <div className="RegisterPatientForm-Frame">
            <div className="Sub-Patient-Registration-Frame">
                <div className="Patient-eReach-logo">
                    <img src={eReachLogo} alt={"e-Reach logo"}/>
                </div>
                <div className="Patient-Header-frame">
                    <h1> PATIENT SIGN-UP</h1><br/>
                    <h2> Please fill the form below carefully and with <br/>precision.</h2>
                </div>
                <div className="Patient-progressBarDiv">
                    {progressBar()}
                </div>
                <div className="Patient-conditionalBarDiv">
                    {conditional()}
                </div>

            </div>


        </div>
    );
};