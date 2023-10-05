import React, { useEffect } from "react";
import PatientNavBar from "./PatientNavBar";
import action from '../patient-icons/patient-eye-view.svg'
import '../styles/PatientRecord.css'
import PatientSideBar from "./PatientSideBar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";



const PatientRecord = () =>{

    const patientsRecords = [];
    useEffect(()=>{
    const patientIdentificationNumber = localStorage.getItem("patientIdentificationNumber")
    const hospitalEmail = localStorage.getItem("hospitalEmail")

    if(patientIdentificationNumber){

        axios.get(" http://localhost:8080/api/v1/patient/view-records/"+patientIdentificationNumber)
            .then(response => {
                if(!response.data)
                  toast.info("No records found", {position: toast.POSITION.TOP_CENTER, autoClose: 5000})
                else {
                    patientsRecords.push(response.data)
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
              <th>Hospital Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="patient-record-table-data">
            {patientsRecords.map((record, index) => {
               <tbody className="patient-record-table-data">
                 <tr>
                 <td>{record.date}</td>
                 <td>{record.lastTimeUpdated}</td>
                 <td>{"Hospital Name"}</td>
                 <td><a href="link to backend here">
                   <img src={action}/></a>
               </td>
                </tr>
              </tbody>
            })}
              
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