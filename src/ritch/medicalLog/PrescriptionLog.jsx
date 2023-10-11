import React, { useState, useEffect } from 'react';
import '../medicalLog/medicalLogStyle/prescriptionLog.css'

const PrescriptionLog = (prescription) => {
  console.log(prescription)
  const [buttonPopUp,setButtonPopUp]=useState(false);

  return (
  
    <div className="prescription-log-modal-two">

      <div className='prescription-main-con'>
      <div className='add-prescription-con'>
      <h2>Prescription</h2>
        <button className='add-prescription-btn' onClick={openPopUp}>Add</button>
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

