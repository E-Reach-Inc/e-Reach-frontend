import React, { useState, useEffect } from 'react';
import PopUp from './doctorsModal';
import '../medicalLog/medicalLogStyle/prescriptionLog.css'

const PrescriptionLog = (prescription) => {
  console.log(prescription)
  const [buttonPopUp,setButtonPopUp]=useState(false);


  
  const openPopUp =() =>{
    setButtonPopUp(true);
  }
  const closePopUp = () =>{
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
      
     
    </div>
  
    
  

    

    
  );
};

export default PrescriptionLog;

