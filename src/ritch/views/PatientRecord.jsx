import React from "react";
import PatientNavBar from "./PatientNavBar";
import action from '../patient-icons/patient-eye-view.svg'
import '../styles/PatientRecord.css'
import PatientSideBar from "./PatientSideBar";



const PatientRecord = () =>{

    return(
        <div className="patient-record-outter-div">

            <div>
                <PatientSideBar/> 
            </div>
           
           <div className="patient-record-inner-div">


              <div>
              <PatientNavBar/>
              </div>

              <div  className="patient-record-inner-con">

              <h1 className="patient-record-title">Patient Record</h1>
    <h3 className="patient-med-logs">Medical logs</h3>
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
               <tr>
                <td>scvh653rghngg</td>
                <td>asd345tyhjoo</td>
                <td>sdfhhjjj</td>
                <td><a href="link to backend here">
                  <img src={action}/></a>
              </td>
               </tr>
          </tbody>
        </table>

              </div>
           
    
            </div>     
        
    </div>
    )
    
}
export default PatientRecord;