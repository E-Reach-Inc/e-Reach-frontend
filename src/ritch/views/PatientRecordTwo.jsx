import React, {useState}from "react";
import PatientNavBar from "./PatientNavBar";
import action from '../patient-icons/patient-eye-view.svg'
import '../styles/PatientRecordTwo.css'



const PatientRecordTwo = () =>{ 
    return(
        <div className="patient-record-two-table-outter-con">

          <div className="patient-record-two-med-logs">
          <h3 className="patient-med-logs-two">Records</h3>
          <button>Browse All</button>
          </div>
          <div className="patient-record-two-inner-con">
         
        <table className="patient-record-two-table">

          <thead className="patient-record-two-table-header">
            <tr>
              <th>Date Created</th>
              <th>Last Time Updated</th>
              <th>Hospital Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="patient-record-two-table-data">
               <tr>
                <td>scvh653rghnggg</td>
                <td>asd345tyhjoooooo</td>
                <td>sdfhhjjjjjjjjjjj</td>
                <td>
                  <img src={action}/>
                </td>
               </tr>
               <tr>
                <td>scvh653rghnggg</td>
                <td>asd345tyhjoooooo</td>
                <td>sdfhhjjjjjjjjjjj</td>
                <td><a href="link to backend here">
                  <img src={action}/></a>
              </td>
               </tr>
               <tr>
                <td>scvh653rghnggg</td>
                <td>asd345tyhjoooooo</td>
                <td>sdfhhjjjjjjjjjjj</td>
                <td><a href="link to backend here">
                  <img src={action}/></a>
              </td>
               </tr>
               <tr>
                <td>scvh653rghnggg</td>
                <td>asd345tyhjoooooo</td>
                <td>sdfhhjjjjjjjjjjj</td>
                <td><a href="link to backend here">
                  <img src={action}/></a>
              </td>
               </tr>
                <tr>
                <td>scvh653rghnggg</td>
                <td>asd345tyhjoooooo</td>
                <td>sdfhhjjjjjjjjjjj</td>
                <td><a href="link to backend here">
                  <img src={action}/></a>
              </td>
               </tr>
          </tbody>
        </table>
          </div>
    </div>
    )
    
}
export default PatientRecordTwo;