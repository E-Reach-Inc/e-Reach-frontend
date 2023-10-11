import React from "react";
import '../styles/PatientAppointmentTwo.css'
import action from '../patient-icons/patient-eye-view.svg'


const PatientAppointmentTwo = () =>{


    return(
        
      <div className="patient-appointment-two-table-outer-con">
         <div className="patient-appointment-two-table-top">
        <h1 className="patient-appointment-two-title">Appointment(s)</h1>
        <button>Browse All</button>
        </div>

        <div className="patient-appointment-two-table-inner-con">
        <table className="patient-appointment-two-table">

<thead className="patient-appointment-two-table-header">
  <tr>
    <th id="patient-th">Date</th>
    <th>Type</th>
    <th>Hospital Name</th>
    <th>Status</th>
    <th>Action</th>
  </tr>
</thead>
<tbody className="patient-appointment-two-table-data">
     <tr>
      <td>hhhhhhh</td>
      <td>gggg</td>
      <td>asduu</td>
      <td>sdfgh</td>
      <td><a href="link to backend here">
        <img src={action}/></a>
    </td>
    </tr>
    <tr>
      <td>sdfgerfo</td>
      <td>sdfghj2g</td>
      <td>asdfghb</td>
      <td>sdfgh345tghj</td>
      <td><a href="link to backend here">
        <img src={action}/></a>
    </td>
     </tr>

     <tr>
      <td>swrttgbfffnm</td>
      <td>scvh653rghn</td>
      <td>asd345tyhj</td>
      <td>sdfghn56</td>
      <td><a href="link to backend here">
        <img src={action}/></a>
    </td>
     </tr>
     <tr>
      <td>hhhhhhh</td>
      <td>gggg</td>
      <td>asduu</td>
      <td>sdfgh</td>
      <td><a href="link to backend here">
        <img src={action}/></a>
    </td>
    </tr>
    <tr>
      <td>hhhhhhh</td>
      <td>gggg</td>
      <td>asduu</td>
      <td>sdfgh</td>
      <td><a href="link to backend here">
        <img src={action}/></a>
    </td>
    </tr>
    <tr>
      <td>hhhhhhh</td>
      <td>gggg</td>
      <td>asduu</td>
      <td>sdfgh</td>
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
export default PatientAppointmentTwo;