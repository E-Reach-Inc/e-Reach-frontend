import React, {useState} from 'react'
import '../../styles/pharmacistFolder/pharmacistAppointmentDashboard.css'
import {useNavigate} from 'react-router-dom'



export const PharmacistAppointmentDashboard =()=>{
    const [appointments]= useState( [

    ])
    const navigate = useNavigate();
    const hadleButtonClick =()=>{
        navigate("/appointment")
    }

    return(
        <div>
            <div className= 'app'>
                <div className= 'app-button'>
                    <div className= 'app-text'>
                        <h3>Appointments</h3>
                    </div>
                    <div className= 'browse-all-app'>
                        <button onClick={hadleButtonClick}>Browse All</button>
                    </div>
                </div>
                <table className= 'app-table'>
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
    )
}

/*   {
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
        }*/