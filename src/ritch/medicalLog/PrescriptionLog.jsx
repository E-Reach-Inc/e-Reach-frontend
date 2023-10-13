import React, { useState, useEffect, useContext } from 'react';
import PopUp from "./doctorsModal"
import '../medicalLog/medicalLogStyle/prescriptionLog.css'
import { LogContext } from './MedicalLog';

const PrescriptionLog = () => {

  const logData = useContext(LogContext)

  console.log("This is log data  ==> ", logData)
  const [buttonPopUp,setButtonPopUp]=useState(false);
  // const [prescriptions, setPrescriptions] = useState([]);


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
      </div>

     
      <div className='view-prescription-con'>
     <p>Medication name</p>
     <button>View</button>
     
      </div>
      </div>
      {buttonPopUp && <PopUp onClose={closePopUp} />}
    </div>
  
    
  

    

    
  );
};

export default PrescriptionLog;

