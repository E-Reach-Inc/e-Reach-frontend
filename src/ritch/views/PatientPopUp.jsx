import React from 'react'
import '../styles/PatientPopUp.css'


const PatientPopUp = (props) => {
  console.log("pop up value --> ", props.lastTimeUpdated)
  // const {hospitalEmail, lastTimeUpdated, patientIdentificationNumber} =  props.patientDetail
  /*

date
: 
"12:00:00"
hospitalEmail
: 
"Eexampl@email.come"
lastTimeUpdated
: 
"12:00:00"
patientIdentificationNumber
: 
  */

  return (
    <div className='patientPopUp'>
            <div className="patient-inner-pop-up">
              <p>date: {props.date}</p>
              <p>hospitalEmail: {props.hospitalEmail}</p>
              <p>lastTimeUpdated: {props.lastTimeUpdated}</p>
              <p>patientIdentificationNumber: {props.patientIdentificationNumber}</p>
            </div>
      <button className='patient-close-button' onClick={props.onClose}>Close</button>
    </div>
  )
}

export default PatientPopUp