import React, { useEffect, useState } from "react";
import '../styles/PatientProfile.css'
import maleImage from '../patient-icons/patient-male.svg'
import PatientNavBar from "./PatientNavBar";
import UploadWidget from "../../cloudinary/uploadWidget";
import '../styles/PatientProfileTwo.css'



const PatientProfileTwo= () =>{
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

      const patientId = localStorage.getItem("patientIdentificationNumber")
      useEffect(()=>{

      })


     const openUploadWidget = () => {
       const imageUrl = <UploadWidget/>
        return imageUrl
     }
    
      return (
        <div className="patient-profile-two-main-con">
          <div className="patient-profile-two-inner-con">
           
           
    
            <div className="patient-two-biodata">
            <div className="patient-two-title">
              <h3>Bio Data</h3>
            </div>
            <div className="patient-two-profile-mid-con">
              
            <div className="patient-two-profile-image">
                {patientData.gender == "male" ? (
                  <img src={openUploadWidget} alt="Patient" />
                ) : (
                  <img src={maleImage} alt="Patient" />
                )}

                <div >
                  <form>
                    <button className="patient-profile-two-upload-btn">Upload</button>
                  </form>
                  
                </div>
                <openUploadWidget/>
              </div>
    
              <div className="patient-two-biodata-input">

              <div className="patient-two-biodata-field">
                  <label >P.I.N :</label>
                  <span>{patientData.patientIdentificationNumber}</span>
                </div>

                <div className="patient-two-biodata-field">
                  <label >First Name :</label>
                  <span>{"Richards"}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>Last Name :</label>
                  <span>{"Akaabiam"}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>N.I.N :</label>
                  <span>{"20222222222"}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>Email :</label>
                  <span>{"richardsakaabiam@gmail.com"}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>Phone Number :</label>
                  <span>{"08144263789"}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>House Number :</label>
                  <span>{patientData.houseNumber}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>Street Name :</label>
                  <span>{patientData.streetName}</span>
                </div>
                <div className="patient-two-biodata-field">
                  <label>State :</label>
                  <span>{patientData.state}</span>
                </div>
                <div className="patient-two-biodata-field">
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
    

export default PatientProfileTwo;