
import React, { useState } from "react";
import "../styles/PatientSignUp.css"
import axios from "axios";
import eReachLogo from "../../ritch/patient-icons/e-Reach-Logo-NoB.svg"
import { ToastContainer, toast } from "react-toastify";


const PatientSignUp = () => {
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
    hospitalEmail: localStorage.getItem("hospitalEmail")
  };

  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState(initialValue);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);


  const onChangeHandler = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  
    const onSubmitHandler = async (e) => {
      try{
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
            hospitalEmail: data.hospitalEmail
          };

      console.log( patientDetails);
    
      const response = await axios.post("http://e-reach-prod.up.railway.app/api/v1/patient/create-patient/", patientDetails);
      if(response.status === 200){
          setRegistrationCompleted(true)
          toast.success("Patient Registration Successful")
          console.log(response);
          console.log(response.data);
      }
      else{
        console.log(response);
      }
      
      
    }catch(Error){
        toast.error(Error)
    }
  }
    const handleSubmit =async () =>{
      const patientDetails = {
        firstName: data.firstName,
        lastName: data.lastName, 
        nin: data.nin,
        phoneNumber: data.phoneNumber,
        email: data.email,
        houseNumber: data.houseNumber,
        streetName: data.streetName,
        state: data.state,
        country: data.country,
        hospitalEmail: data.hospitalEmail

       
      };
    }
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
    return <div className="patient-progressBar">
        <div className="greenCircle">1</div>
        <div className="whiteBar"></div>
        <div className="whiteCircle">2</div>
        <div className="whiteBar"></div>
        <div className="whiteCircle">3</div>
    </div>
  }
  const barTwo=()=>{
    return <div className="patient-progressBar">
        <div className="greenCircle">1</div>
        <div className="greenBar"></div>
        <div className="greenCircle">2</div>
        <div className="whiteBar"></div>
        <div className="whiteCircle">3</div>
    </div>
  }
  const barThree=()=>{
    return <div className="patient-progressBar">
        <div className="greenCircle">1</div>
        <div className="greenBar"></div>
        <div className="greenCircle">2</div>
        <div className="greenBar"></div>
        <div className="greenCircle">3</div>
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
 


  const first=()=>{
    return (
    <div className="patient-info">
        <label className="name-tag-p">First Name</label>
        <input className="input-style" name="firstName" type="text" value={data.firstName} onChange={onChangeHandler} />
        <label className="name-tag-p">Last Name</label>
        <input className="input-style" name="lastName" type="text" value={data.lastName} onChange={onChangeHandler} />
        <label className="name-tag-p">N.I.N</label>
        <input className="input-style" name="nin" type="text" value={data.nin} onChange={onChangeHandler} />
        <div><button  onClick={handleNext}>next</button></div>
        </div>
        )
  }
  const second=()=>{
    return (
    <div className="patient-info"> 
        <label className="name-tag-email">Email </label>
        <input className="input-style" name="email" type="text" value={data.email} onChange={onChangeHandler} />
        <label className="name-tag-phone">Phone Number</label>
        <input className="input-style" name="phoneNumber" type="text" value={data.phoneNumber} onChange={onChangeHandler} />
        <label className="name-tag-number">House Number</label>
        <input className="input-style" name="houseNumber" type="text" value={data.houseNumber} onChange={onChangeHandler} />
        <label className="name-tag-number">Hospital Email</label>
        <input className="input-style" name="hospitalEmail" type="text" value={data.hospitalEmail} onChange={onChangeHandler} />

        <div className="patient-info-double-btns" ><button id="patient-next-btn" onClick={handlePrev}>previous</button>
        <button id="patient-next-btn" onClick={handleNext} >next</button>
        </div>
        </div>
        )
  }
  const third=()=>{
    return (
        <form onSubmit={onSubmitHandler} className="patient-info">
       
            <label>Street Name</label>
            <input className="input-style" name="streetName" type="text" value={data.streetName} onChange={onChangeHandler} />
            <label>State</label>
            <input className="input-style" name="state" type="text" value={data.state} onChange={onChangeHandler} />
            <label>Country</label>
            <input className="input-style" name="country" type="text" value={data.country} onChange={onChangeHandler} />
           
            <div className="patient-info-double-btns" ><button  onClick={handlePrev}>previous</button>
            <button onClick={handleSubmit}>submit</button>
            </div>
        </form>

    )
  }
  

  return (
    <div className="patient-form">
      <ToastContainer/>

      {registrationCompleted === false ? (
         <div className="patient-form-sub-frame">
         <div className="eReach-logo"> 
            <img src={eReachLogo}/>
         </div>

         <div className="patient-header-frame-one">
             <h1 className="patient-text-center">PATIENT SIGN-UP</h1><br/>
             <h2> Please fill the form below carefully and with <br/>precision.</h2>
         </div>

         <div className="patient-progress-bar-div">
             {progressBar()}
         </div>

         <div className="patient-conditional-bar-div">
             {conditional()}
         </div>
     
        </div>
      ) : (
        <div className="Registration-Complete-Frame-two">
              <div className="Inner-Registration">
                  <h3>Registration completed </h3>
                  <p id="reg-two">You will receive an email shortly to activate your hospital's account, please click the activate button to your the account.</p>
              </div>
          </div>
      )}
       
        
        
    </div>
  );
  }
export default PatientSignUp;
