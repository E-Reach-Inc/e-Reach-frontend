import React from 'react'
import '../styles/PatientPopUp.css'


const PatientPopUp = ({onClose, isModalOpen}) => {


  return (
    <div className='patientPopUp'>
            <div className="patient-inner-pop-up">
               
            </div>
      <button className='patient-close-button' onClick={onClose}>Close</button>
    </div>
  )
}

export default PatientPopUp