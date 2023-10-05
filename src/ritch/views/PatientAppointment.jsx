import React from "react";
import PatientNavBar from './PatientNavBar'
import '../styles/PatientAppointment.css'
import PatientSideBar from "./PatientSideBar";
import action from '../patient-icons/patient-eye-view.svg'


const PatientAppointment = () =>{


    return(
        
        <div className="patient-appointment-table-outer-con">
          <div>
          <PatientSideBar/>
          </div>
            <div className="patient-appointment-body-div">
            <PatientNavBar/>
            <h1 className="patient-appointment-title">Appointment(s)</h1>

            <div className="patient-appointment-body-inner-div">

           <div className="Patient-appointment-inner-table-con">
              
            <table className="patient-appointment-table">
              <thead className="patient-appointment-table-header">
                <tr>
                  <th id="patient-th">Date</th>
                  <th>Type</th>
                  <th>Hospital Name</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="patient-appointment-table-data">
                   <tr>
                    <td id="patient-td">sdfgqwertjj</td>
                    <td>sdfghjdggg</td>
                    <td>asdfghjggg</td>
                    <td>sdfgh</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                  </tr>
                  <tr>
                    <td>sdfgerfghqwerty</td>
                    <td>sdfghj23456yhwe</td>
                    <td>asdfghj4567ujhb</td>
                    <td>sdfgh345tghj</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                   </tr>

                   <tr>
                    <td>swrttgbnm</td>
                    <td>scvh653rghn</td>
                    <td>asd345tyhj</td>
                    <td>sdfghn56</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                   </tr> 
                   <tr>
                    <td>Eniola</td>
                    <td>scvh653rghn</td>
                    <td>asd345tyhj</td>
                    <td>sdfghn56</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                   </tr>
                   <tr>
                    <td>Eniola</td>
                    <td>scvh653rghn</td>
                    <td>asd345tyhj</td>
                    <td>sdfghn56</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                   </tr>
                   <tr>
                    <td>Eniola</td>
                    <td>scvh653rghn</td>
                    <td>asd345tyhj</td>
                    <td>sdfghn56</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                   </tr> <tr>
                    <td>Eniola</td>
                    <td>scvh653rghn</td>
                    <td>asd345tyhj</td>
                    <td>sdfghn56</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                   </tr>
                   <tr>
                    <td>Eniola</td>
                    <td>scvh653rghn</td>
                    <td>asd345tyhj</td>
                    <td>sdfghn56</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                   </tr>
                   <tr>
                    <td>Eniola</td>
                    <td>scvh653rghn</td>
                    <td>asd345tyhj</td>
                    <td>sdfghn56</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                   </tr>
                    <tr>
                    <td>Eniola</td>
                    <td>scvh653rghn</td>
                    <td>asd345tyhj</td>
                    <td>sdfghn56</td>
                    <td><a href="link to backend here">
                      <img src={action}/></a>
                  </td>
                   </tr>
              </tbody>
            </table>

           </div>
            </div>
            
            </div>
            
        </div>
    )
}
export default PatientAppointment;