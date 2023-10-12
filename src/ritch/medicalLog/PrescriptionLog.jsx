import React, { useState, useEffect, useContext } from 'react';
import PopUp from "./doctorsModal"
import '../medicalLog/medicalLogStyle/prescriptionLog.css'
import { LogContext } from '../../coco/views/doctor/doctorViewActiveLogsOne';

const PrescriptionLog = () => {

  const logData = useContext(LogContext)

  console.log("This is log data  ==> ", logData)
  const [buttonPopUp,setButtonPopUp]=useState(false);

  const openPopUp = () =>{
    setButtonPopUp(true)
  }

  const closePopUp = () => {
    setButtonPopUp(false)
  }

  return (
  
    <div className="prescription-log-modal-two">

      <div className='prescription-main-con'>
      <div className='add-presc-con'>
      <h2>Prescription</h2>
        <button type='button' className='add-prescription-btn' onClick={openPopUp}>Add</button>
       {buttonPopUp && <PopUp onClose={closePopUp} />}
      </div>

     
      <div className='view-prescription-con'>
     <p>Medication name</p>
     <button>View</button>
     
      </div>
  
      </div>
  
        <p>Medication Name{/*{prescription.medicationName}*/}</p>
        <button>Add New Prescription</button>
    </div>
  
    
  

    

    
  );
};

export default PrescriptionLog;

