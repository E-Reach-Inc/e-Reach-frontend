import React, { useEffect, useState } from "react";
import '../styles/PatientProfile.css'
import maleImage from '../patient-icons/patient-male.svg'
import PatientNavBar from "./PatientNavBar";
import PatientSideBar from "./PatientSideBar";
import axios from "axios";

const PatientProfile = () => {
  const [patientData, setPatientData] = useState({
    firstName:  "",
    lastName: "",
    nin:  "",
    email: "",
    phoneNumber: "",
    houseNumber: "",
    streetName: "",
    state: "",
    country: "",
    gender:"",
    patientIdentificationNumber: "",
  });

  useEffect(() => {
    // const patientIdentificationNumber = '9818a6c8d9';
    const apiUrl = "http://localhost:8080/api/v1/patient/get/"+"9818a6c8d9";
  
   

    axios.get(apiUrl)
      .then(response => {
        const data = response.data;
        console.log(response)
        setPatientData(data);
        console.log('Response:', JSON.stringify(data));
        
        
        // localStorage.setItem("firstName", data.firstName);
        // localStorage.setItem("lastName", data.lastName);
        // localStorage.setItem("nin", data.nin);
        // localStorage.setItem("email", data.email);
        // localStorage.setItem("phoneNumber", data.phoneNumber);
        // localStorage.setItem("houseNumber", data.houseNumber);
        // localStorage.setItem("streetName", data.streetName);
        // localStorage.setItem("state", data.state);
        // localStorage.setItem("country", data.country);
        // localStorage.setItem("gender", data.gender);
        // localStorage.setItem("patientIdentificationNumber", data.patientIdentificationNumber);
      })
      .catch(error => {
        console.error("Error fetching patient data:", error);
      });
  }, []);

  const openUploadWidget = () => {
     };

  return (
    <div className="patient-profile-main-con">
      <div>
        <PatientSideBar />
      </div>
      <div className="patient-profile-inner-con">
        <div>
          <PatientNavBar />
        </div>
        <div className="patient-profile-inner-div">
          <div className="patient-title">
            <h2>Bio Data</h2>
          </div>
          <div className="patient-biodata">
            <div className="patient-profile-image">
              {patientData.gender === "male" ? (
                <img src={"openUploadWidget"} alt="Patient" />
              ) : (
                <img src={maleImage} alt="Patient" />
              )}
              {/* <UploadWidget /> */}
              <div>
                <form onClick={openUploadWidget}>
                  <button className="patient-profile-img-upload-btn">Upload</button>
                </form>
              </div>
            </div>
            <div className="patient-biodata-input">
              <div className="patient-biodata-field">
                <label>Patient Identification Number:</label>
                <span>{patientData.patientIdentificationNumber}</span>
              </div>
              <div className="patient-biodata-field">
                <label>First Name:</label>
                <span>{patientData.firstName}</span>
              </div>
              <div className="patient-biodata-field">
                <label>Last Name:</label>
                <span>{patientData.lastName}</span>
              </div>
              <div className="patient-biodata-field">
                <label>N.I.N:</label>
                <span>{patientData.nin}</span>
              </div>
              <div className="patient-biodata-field">
                <label>Email:</label>
                <span>{patientData.email}</span>
              </div>
              <div className="patient-biodata-field">
                <label>Phone Number:</label>
                <span>{patientData.phoneNumber}</span>
              </div>
              <div className="patient-biodata-field">
                <label>House Number:</label>
                <span>{patientData.houseNumber}</span>
              </div>
              <div className="patient-biodata-field">
                <label>Street Name:</label>
                <span>{patientData.streetName}</span>
              </div>
              <div className="patient-biodata-field">
                <label>State:</label>
                <span>{patientData.state}</span>
              </div>
              <div className="patient-biodata-field">
                <label>Country:</label>
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
