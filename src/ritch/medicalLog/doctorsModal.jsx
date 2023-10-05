import React,{useState, useEffect}from 'react'
import '../medicalLog/medicalLogStyle/doctorsModal.css'

 const PopUp = ({ onClose}) => {



  const [prescriptions, setPrescriptions] = useState([]);
  const [selectedMedication, setSelectedMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [dosageFrequency, setDosageFrequency] = useState('');
  const [startDate, setStartDate] = useState('');
  const [prescriptionDate, setPrescriptionDate] = useState('');
  const [medicationName, setMedicationName] = useState('');
  
  useEffect(() => {
    // Fetch prescription data from the backend 
    fetch('/api/prescriptions')
      .then((response) => response.json())
      .then((data) => setPrescriptions(data));
  }, []);

  const handleMedicationChange = (event) => {
    setSelectedMedication(event.target.value);
  };

  const handleDosageChange = (event) => {
    setDosage(event.target.value);
  };

  const handleDosageFrequencyChange = (event) => {
    setDosageFrequency(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handlePrescriptionDateChange = (event) => {
    setPrescriptionDate(event.target.value);
  };
  const handleAddPrescription = () => {
    if (selectedMedication && dosage && dosageFrequency && startDate && prescriptionDate) {
      
      const newPrescription = {
        medicationName: medicationName,
        dosage,
        dosageFrequency,
        startDate,
        prescriptionDate,
        checked: false,
        practitionersEmail: localStorage.getItem("practitionerEmail"),
      };
      setPrescriptions([...prescriptions, newPrescription]);  
     setSelectedMedication('');
      setMedicationName('')
      setDosage('');
      setDosageFrequency('');
      setStartDate('');
      setPrescriptionDate('');
    }
  };
  const handlePrescriptionToggle = (index) => {
    const updatedPrescriptions = [...prescriptions];
    updatedPrescriptions[index].checked = !updatedPrescriptions[index].checked;
    setPrescriptions(updatedPrescriptions);
  };
  return (
        <div className="popup-container">
          <div className= 'popup-inner'>
            <div className="prescription-log-modal">
              <div className="prescription-compartment">
                    <h2>Prescription Log</h2>
                <div className="prescription-inputs">
                   <select value={selectedMedication} onChange={handleMedicationChange} className='prescription-inputs'>
                      <option value="">Select Medication</option>
                       {prescriptions.map((prescription) => (
                     <option key={prescription.id} value={prescription.medicationName}>
                      {prescription.medicationName}
                     </option>
                      ))}
                    </select>
                </div>
                  <div className="input-dosage">
                  <input
                      type="text"
                      placeholder="Dosage"
                      id='dosage'
                     value={dosage}
                    onChange={handleDosageChange}
                    />
                  </div>
                 <div className="input-frequency">
                 <input
                   type="text"
                   placeholder="Dosage Frequency"
                   id='dosageFrequency'
                   value={dosageFrequency}
                   onChange={handleDosageFrequencyChange}
                  />
                 </div>
                 <p id='start'>Start date</p>
                <input
                  type="date"
                  placeholder="Start Date "
                  value={startDate}
                  id='startdate'
                  onChange={handleStartDateChange}
                />
                <p id='start'>Prescription date</p>
               <input
                 type="date"
                placeholder="Prescription Date"
                value={prescriptionDate}
                id='prescriptiondate'
                onChange={handlePrescriptionDateChange}
               />
                  <div className="addButton">
                      <button onClick={handleAddPrescription}>Add</button>
                  </div>          
           <ul>
               {prescriptions.map((prescription, index) => (
             <li key={index}>
              <input
                type="checkbox"
                checked={prescription.checked}
                onChange={() => handlePrescriptionToggle(index)}
              />
              <span className="medication-name">{prescription.medicationName}</span>
              <span className="medication-dosage">{prescription.dosage}</span>
              <span className="medication-frequency">{prescription.dosageFrequency}</span>
              <span className="start-date">{prescription.startDate}</span>
              <span className="prescription-date">{prescription.prescriptionDate}</span>
              </li>
              ))}
           </ul>
        </div>
       </div>
            <button className='close-button' onClick={onClose}>Close</button>
        </div>
    </div>
  )
} 

export default PopUp;
