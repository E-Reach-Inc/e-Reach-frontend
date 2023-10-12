import React, {useState} from 'react'
import InputFamily from './inputFamily';
import "../../styles/auth/hospitalAdminSIgnUp.css"
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import eReachLogo from "../../assets/images/EReachLogoNoB.svg"
import UploadWidget from '../../../cloudinary/uploadWidget';

function HospitalAdminSignUp() {

    const initialValue = {
        adminFirstName: "",
        adminLastName: "",
        adminEmail: "",
        adminPhoneNumber: "",
        adminPassword: "",
        hospitalName: "",
        HEFAMAA_ID: "",
        hospitalEmail: "",
        hospitalPhoneNumber: "",
        streetAddress: "",
        state: "",
        country: "",
        postCode: ""
    };

    const [registrationCompleted, setRegistrationCompleted] = useState(false);
    const [data, setData] = useState(initialValue);
    const [currentStep, setCurrentStep] = useState(0);
    const steps = ['Admin Details', 'hospital details 1', 'hospital details 2'];

    function handleSignUpFormSubmission(event) {
        event.preventDefault();
        setRegistrationCompleted(true);
        const hospitalSignUpDetails = {
            adminFirstName: data.adminFirstName,
            adminLastName: data.adminLastName,
            adminEmail: data.adminEmail,
            adminPhoneNumber: data.adminPhoneNumber,
            adminPassword: data.adminPassword,
            hospitalName: data.hospitalName,
            HEFAMAA_ID: data.HEFAMAA_ID,
            hospitalEmail: data.hospitalEmail,
            hospitalPhoneNumber: data.hospitalPhoneNumber,
            streetAddress: data.streetAddress,
            state: data.state,
            country: data.country,
            postCode: data.postCode
        }
        
        try {
            axios.post("http://localhost:8080/api/v1/hospital-admin/register-hospital/", hospitalSignUpDetails)
                 .then(successResponse => {
                     console.log(successResponse)
                     console.log("hospital email is: "+successResponse.data.hospitalEmail);
                     setRegistrationCompleted(true)
                     localStorage.setItem("hospitalEmail", successResponse.data.hospitalEmail)
                     toast.success(successResponse.data.message, {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                })
                 .catch(failureResponse => {
                     toast.error("Registration Failed", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                 })
                 .finally(recovery => {
                    
                 })
        } catch (error) {
            toast.error(error.message)
        }
    }

    function handleChangeForAllInputs(event){
        let eventTarget = event.target;
        setData((previousValue)=>({...previousValue, [eventTarget.id]: eventTarget.value}))
          if (event.target.name === 'Password'){
            let eventTarget = event.target;
            const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$<%&()?*!]).{8,12}$/
            let currently = eventTarget.checkValidity();
            console.log('currently', currently);
            if (currently) {
                let regExp = new RegExp(passwordPattern, 'i');
                if (regExp.test(eventTarget.value) === false) {
                  eventTarget.setCustomValidity(`
                                                  NOT a valid password.
                                                  Password must be between 8-12 characters long,
                                                  Password must contain at least one uppercase letter and one digit,
                                                  Password must contain at least one of the special characters: @, #, $, %, ? &, ., !, *, (, ), 
                                              `);
                  eventTarget.reportValidity();
                }
                setData((previousValue)=>({...previousValue, [eventTarget.id]: eventTarget.value}))
            }
        }
        else setData((previousValue)=>({...previousValue, [eventTarget.id]: eventTarget.value}))
    }


    function handleNextButtonClick(){
      console.log(currentStep)
      setCurrentStep(currentStep + 1)
    }

    function handlePreviousButtonClick(){
      console.log(currentStep)
      setCurrentStep(currentStep - 1)

    }

    const stepOneFields = [
      { name: 'First Name', type: 'text', value: 'Abubakar', id: 'adminFirstName' },
      { name: 'Last Name', type: 'text', value: 'Chukwuma', id: 'adminLastName' },
      { name: 'Admin Email', type: 'email', value: 'iretichuckwuma@example.com', id: 'adminEmail' },
      // { name: 'Password', type: 'password', value: '*******', id: 'adminPassword' },
      { name: 'Phone Number', type: 'tel', value: '07000000000', id: 'adminPhoneNumber' },
    ]

    const stepTwoFields = [
      { name: 'Hospital Name', type: 'text', value:'Glory Health', id: 'hospitalName' },
      { name: 'Hospital Email', type: 'email', value:'gloryhealthhospital@gmail.com', id: 'hospitalEmail' },
      { name: 'HEFAMAA ID', type: 'password', value: '*******', id: 'HEFAMAA_ID' },
      { name: 'Hospital Phone Number', type: 'tel', value: '07000000000', id: 'hospitalPhoneNumber' },
    ]

    const stepThreeFields = [
      { name: 'Street Address', type: 'text', value: '123B harvey street', id: 'streetAddress' },
      { name: 'City', type: 'text', value: 'Yaba', id: 'city' },
      { name: 'Postal Code', type: 'text', value: '111111', id: 'postalCode' },
      { name: 'State', type: 'text', value: 'Lagos', id: 'state' },
    ]

    return ( 
        <div className="Main-Div">
        {registrationCompleted === false ? (
          <div className='Main-Registration-Form'>
            <ToastContainer/>
              <div className="Header-Frame">
                  <div className="Logo-frame">
                      <img src={eReachLogo} alt={"e-Reach logo"}/>
                  </div>
                  <div className="Inner-Header-Frame">
                      <p className="text-center">Hospital Admin SignUp</p>
                      <p> Please fill the form below carefully and with precision.<br/>free to add as much detail as needed</p>
                  </div>
              </div>
              <div className="progress-bar">
                  {steps.map((step, index)=>{
                      return (
                          <div className={"step-progress-bar"} key={step}>
                              <div className="step">
                                  <div 
                                      className={index <= currentStep ? 'progress-bar-circle active-progress-bar': "progress-bar-circle"}>{index + 1}</div>
                              </div>
                              {index < 2 && (<div className={index < currentStep ? 'progress-horizontal-bar active-horizontal-bar' : 'progress-horizontal-bar'}>
                              </div>)}
                          </div>
                      )
                  })}
              </div>
              <form className={"Registration-Form-Element"} onSubmit={handleSignUpFormSubmission}>
                  <div className="input-fields">
                      {currentStep === 0 && <InputFamily
                          numberOfInputFields={3}
                          onchange={handleChangeForAllInputs}
                          inputFields={stepOneFields}
                          required={true}
                      />
                      }
                      {currentStep === 1 && <InputFamily
                          numberOfInputFields={3}
                          onchange={handleChangeForAllInputs}
                          inputFields={stepTwoFields}
                          required={true}
                      />
                      }
                      {currentStep === 2 && <InputFamily
                          numberOfInputFields={3}
                          onchange={handleChangeForAllInputs}
                          inputFields={stepThreeFields}
                          required={true}
                      />
                      }
                  </div>
                  <div className="Action-Buttons-Div">
                      {currentStep === 0 && <div className="Movement-And-Submit-Button"><button type="button"  onClick={handleNextButtonClick}>next</button></div>}
                      {currentStep === 1 && <div className="Movement-And-Submit-Button">
                        <button type="button" onClick={handlePreviousButtonClick}>previous</button>
                        <button type="button" onClick={handleNextButtonClick}>next</button>
                      </div>}
                      {currentStep === 2 && <div className="Movement-And-Submit-Button">
                        <button type="button" onClick={handlePreviousButtonClick}>previous</button>
                        <button type="submit" onClick={handleSignUpFormSubmission}>submit</button>
                      </div>}
                      {/* <UploadWidget/> */}
                  </div>
              </form>
          </div>) : (
          <div className="Registration-Complete-Frame">
              <div className="Inner-Registration">
                  <h3>Registration completed </h3>
                  <p id="reg-two">You will receive an email shortly to activate your hospital's account, please click the activate button to your the account.</p>
              </div>
          </div>)
    }
    </div>);
}
  

export default HospitalAdminSignUp