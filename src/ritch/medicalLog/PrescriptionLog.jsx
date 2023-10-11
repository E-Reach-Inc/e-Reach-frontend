import React, { useState, useEffect, useContext } from 'react';
import '../medicalLog/medicalLogStyle/prescriptionLog.css'
import { LogContext } from '../../coco/views/doctor/doctorViewActiveLogsOne';

const PrescriptionLog = () => {
  
  const logData = useContext(LogContext)  
 
  return (
    <div className="prescription-log-modal-two">
        <p>Medication Name{/*{prescription.medicationName}*/}</p>
        <button>Add New Prescription</button>

    </div>
  );
};

export default PrescriptionLog;

