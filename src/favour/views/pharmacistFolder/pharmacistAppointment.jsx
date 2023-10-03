import React from 'react';
import {PharmacistSideBar} from "./pharmacistSideBar";
import {PharmacistSearchBar} from "./pharmacistSearchBar";
import '../../styles/pharmacistFolder/pharmacistAppointment.css'

export const PharmacistAppointment =()=>{
    const appointments = [
          {
            patientName: 'Favour chiemela', 
            type: 'Consultation',
            appointmentDate: '22/12/2023',
            account: '10001',
            doctorsName: 'John perry'
          },
          {
            patientName: 'Favour chiemela',
            type: 'Consultation',
            appointmentDate: '22/12/2023',
            account: '10001',
            doctorsName: 'John perry'
          },
           {
            patientName: 'Favour chiemela',
            type: 'Consultation',
            appointmentDate: '22/12/2023',
            account: '10001',
            doctorsName: 'John perry'
          },
          {
            patientName: 'Favour chiemela',
            type: 'Consultation',
            appointmentDate: '22/12/2023',
            account: '10001',
            doctorsName: 'John perry'
          },
        {
            patientName: 'Favour chiemela',
            type: 'Consultation',
            appointmentDate: '22/12/2023',
            account: '10001',
            doctorsName: 'John perry'
          },
        {
            patientName: 'Favour chiemela',
            type: 'Consultation',
            appointmentDate: '22/12/2023',
            account: '10001',
            doctorsName: 'John perry'
          },
        {
            patientName: 'Favour chiemela',
            type: 'Consultation',
            appointmentDate: '22/12/2023',
            account: '10001',
            doctorsName: 'John perry'
          },
        {
            patientName: 'Favour chiemela',
            type: 'Consultation',
            appointmentDate: '22/12/2023',
            account: '10001',
            doctorsName: 'John perry'
          },
        {
            patientName: 'Favour chiemela',
            type: 'Consultation',
            appointmentDate: '22/12/2023',
            account: '10001',
            doctorsName: 'John perry'
          },
         {
             patientName: 'Favour chiemela',
             type: 'Consultation',
             appointmentDate: '22/12/2023',
             account: '10001',
             doctorsName: 'John perry'
           },
        ]
    return(
        <div className= 'body'>
            <div className= 'med-con'>
                <PharmacistSideBar/>
                <div className='med-hold'>
                    <PharmacistSearchBar/>
                    <p id='appont'>Appointment</p>
                    <div className= 'appointment-holder'>
                        <div className= 'appoint-appoin-button'>
                            <div className= 'appoint-text'>
                                <h3>Appointments</h3>
                            </div>
                            <div className="input-con">
                                <input
                                    type="text"
                                    className="search-bar-three"
                                    placeholder="search..."
                                    aria-label= "Search"
                                />
                                <button type="button" className="search-button-three">
                                    Search
                                </button>
                            </div>
                            <div className= 'browse-all-appoin'>
                                <button>Browse All</button>
                            </div>
                        </div>
                        <table className= 'appointment-table'>
                            <thead>
                            <tr>
                            <th >patients name</th>
                            <th >Type</th>
                            <th>Appointment</th>
                            <th>Account</th>
                            <th>Doctors name</th>
                            </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appointment, index) => (
                                <tr key={index}>
                                    <td >{appointment.patientName}</td>
                                    <td >{appointment.type}</td>
                                    <td >{appointment.appointmentDate}</td>
                                    <td >{appointment.account}</td>
                                    <td >{appointment.doctorsName}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}