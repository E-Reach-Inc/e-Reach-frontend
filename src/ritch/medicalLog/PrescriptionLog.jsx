import React, { useState, useEffect } from 'react';
import '../medicalLog/medicalLogStyle/prescriptionLog.css'

const PrescriptionLog = (prescription) => {
  console.log(prescription)
  
  // useEffect(() => {
  //   // Fetch prescription data from the backend 
  //   fetch('/api/prescriptions')
  //     .then((response) => response.json())
  //     .then((data) => setPrescriptions(data));
  // }, []);

  // const handleMedicationChange = (event) => {
  //   setSelectedMedication(event.target.value);
  // };

  // const handleDosageChange = (event) => {
  //   setDosage(event.target.value);
  // };

  // const handleDosageFrequencyChange = (event) => {
  //   setDosageFrequency(event.target.value);
  // };

  // const handleStartDateChange = (event) => {
  //   setStartDate(event.target.value);
  // };

  // const handlePrescriptionDateChange = (event) => {
  //   setPrescriptionDate(event.target.value);
  // };

  // const handleAddPrescription = () => {
  //   if (selectedMedication && dosage && dosageFrequency && startDate && prescriptionDate) {
      
  //     const newPrescription = {
  //       medicationName: medicationName,
  //       dosage,
  //       dosageFrequency,
  //       startDate,
  //       prescriptionDate,
  //       checked: false,
  //       practitionersEmail: localStorage.getItem("practitionerEmail"),
  //     };
  //     setPrescriptions([...prescriptions, newPrescription]);

     
  //     setSelectedMedication('');
  //     setDosage('');
  //     setDosageFrequency('');
  //     setStartDate('');
  //     setPrescriptionDate('');
  //   }
  // };
  // const handlePrescriptionToggle = (index) => {
  //   const updatedPrescriptions = [...prescriptions];
  //   updatedPrescriptions[index].checked = !updatedPrescriptions[index].checked;
  //   setPrescriptions(updatedPrescriptions);
  // };




  
 
  return (
    <div className="prescription-log-modal-two">
        <p>Medication Name{/*{prescription.medicationName}*/}</p>
        <button>Add New Prescription</button>

    </div>
  );
};

export default PrescriptionLog;

