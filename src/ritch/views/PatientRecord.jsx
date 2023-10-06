import React, { useEffect } from "react";
import PatientNavBar from "./PatientNavBar";
import action from '../patient-icons/patient-eye-view.svg'
import '../styles/PatientRecord.css'
import PatientSideBar from "./PatientSideBar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



const PatientRecord = () =>{

    const patientsRecords = [
        {
            date: "25th/dec/2023",
            lastTimeUpdated: '12:00:00',
            patientIdentificationNumber: 'e123456789990',
            // action: {action},
        },
        {
          date: "25th/dec/2023",
          lastTimeUpdated: '12:00:00',
          patientIdentificationNumber: 'e123456789990',
          // action: {action},
      },
      {
        date: "25th/dec/2023",
        lastTimeUpdated: '12:00:00',
        patientIdentificationNumber: 'e123456789990',
        // action: {action},
    },
        
    ];
    useEffect(()=>{
    const patientIdentificationNumber = localStorage.getItem("patientIdentificationNumber")
    const hospitalEmail = localStorage.getItem("hospitalEmail")
    console.log("hi pin")
    console.log("hi email")

    if(patientIdentificationNumber){

        axios.get(" http://localhost:8080/api/v1/patient/view-records/"+patientIdentificationNumber)
            .then(response => {
                if(!response.data)
                  toast.info("No records found", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                else {
                    patientsRecords.push(response.data)
                    localStorage.setItem("records", JSON.stringify(response.data));

                }
            })
            .catch(failureResponse => {

            })
            .finally()
    }

    else if(hospitalEmail){
        axios.get("http://localhost:8080/api/v1/hospital/view-records/"+hospitalEmail)
            .then(response => {
              if(!response.data)
                toast.info("No records found", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
              else {
                  patientsRecords.push(response.data)
                  localStorage.setItem("records", JSON.stringify(response.data));

              }
            })
            .catch(failureResponse => {

            })
            .finally() 
    }
}, [])
    return(
        <div className="patient-record-outter-div">
            <ToastContainer/>
            <div>
                <PatientSideBar/> 
            </div>
           
           <div className="patient-record-inner-div">


              <div>
              <PatientNavBar/>
              </div>

              <div  className="patient-record-inner-con">

             
    <h3 className="patient-med-logs">Records</h3>
        <table className="patient-record-table">

          <thead className="patient-record-table-header">
            <tr>
              <th>Date Created</th>
              <th>Last Time Updated</th>
              <th>Patient Identification Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="patient-record-table-data">               
                {patientsRecords.map((patientsRecords, index) => (
                                <tr key={index}>
                                    <td >{patientsRecords.date}</td>
                                    <td >{patientsRecords.lastTimeUpdated}</td>
                                    <td >{patientsRecords.patientIdentificationNumber}</td>
                                    <td><a href="open popup"><img src={action} /></a></td>
                                </tr>
                  ))}
                  
              
              </tbody>
    

          </table>
        </div>
           
    
        </div>     
        
    </div>
    )
    
}
export default PatientRecord;
/*
 <tr>
  <td>scvh653rghngg</td>
  <td>asd345tyhjoo</td>
  <td>sdfhhjjj</td>
  <td><a href="link to backend here">
    <img src={action}/></a>
</td>
  </tr>
  <tr>
  <td>scvh653rghngg</td>
  <td>asd345tyhjoo</td>
  <td>sdfhhjjj</td>
  <td><a href="link to backend here">
    <img src={action}/></a>
</td>
  </tr>
  */