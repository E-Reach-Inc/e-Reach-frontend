import React, { useState } from "react";
import '../styles/PatientProfile.css'
import femaleImage from '../patient-icons/patient-female.svg'
import maleImage from '../patient-icons/patient-male.svg'
import PatientNavBar from "./PatientNavBar";
import UploadWidget from "../../cloudinary/uploadWidget";
import PatientSideBar from "./PatientSideBar";




const PatientProfile= () =>{
    const [patientData, setPatientData] = useState({
        firstName: "",
        lastName: "",
        nin: "",
        email: "",
        phoneNumber: "",
        houseNumber: "",
        streetName: "",
        state: "",
        country: "",
        gender: "",
        patientIdentificationNumber : "",
      });


     const openUploadWidget = () => {
       const imageUrl = UploadWidget();
      
        return imageUrl
     }
    
      return (
        <div className="patient-profile-main-con">

            <div>
                <PatientSideBar/> 
            </div>
                
          <div className="patient-profile-inner-con">
            <div>
            <PatientNavBar/>
            </div>

            <div className="patient-profile-inner-div">

                    
            <div className="patient-title">
              <h2>Bio Data</h2>
            </div>
    
            <div className="patient-biodata">
              <div className="patient-profile-image">
                {patientData.gender == "male" ? (
                  <img src={openUploadWidget} alt="Patient" />
                ) : (
                  <img src={maleImage} alt="Patient" />
                )}
                <UploadWidget/>

                {/* <div >
                  <form onClick={openUploadWidget}>
                    <button onClick={()=>{console.log("hello")}} className="patient-profile-img-upload-btn">Upload</button>
                  </form>
                </div> */}
              </div>
    
              <div className="patient-biodata-input">

              <div className="patient-biodata-field">
                  <label >Patient Identification Number :</label>
                  <span>{patientData.patientIdentificationNumber}</span>
                </div>

                <div className="patient-biodata-field">
                  <label >First Name :</label>
                  <span>{patientData.firstName}</span>
                </div>
                <div className="patient-biodata-field">
                  <label>Last Name :</label>
                  <span>{patientData.lastName}</span>
                </div>
                <div className="patient-biodata-field">
                  <label>N.I.N :</label>
                  <span>{patientData.nin}</span>
                </div>
                <div className="patient-biodata-field">
                  <label>Email :</label>
                  <span>{patientData.email}</span>
                </div>
                <div className="patient-biodata-field">
                  <label>Phone Number :</label>
                  <span>{patientData.email}</span>
                </div>
                <div className="patient-biodata-field">
                  <label>House Number :</label>
                  <span>{patientData.houseNumber}</span>
                </div>
                <div className="patient-biodata-field">
                  <label>Street Name :</label>
                  <span>{patientData.streetName}</span>
                </div>
                <div className="patient-biodata-field">
                  <label>State :</label>
                  <span>{patientData.state}</span>
                </div>
                <div className="patient-biodata-field">
                  <label>Country :</label>
                  <span>{patientData.country}</span>
                </div>
              </div>
            </div>

            </div>

            
          </div>
        </div>
      );
    };
    

export default PatientProfile;