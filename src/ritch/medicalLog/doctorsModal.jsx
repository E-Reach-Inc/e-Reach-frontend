import React,{useState, useEffect}from 'react'
import '../medicalLog/medicalLogStyle/doctorsModal.css'

 export const PopUp = ({onClose,  notprescriptions}) => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [recentPresc, setRecentPresc] = useState(newPrescription);
  const [selectedMedication, setSelectedMedication] = useState('');

  const newPrescription = {
    medicationName: '',
    dosage: '',
    dosageFrequency: '',
    startDate: '',
    prescriptionDate: '',
    checked: false,
    practitionersEmail: '',
  };
    
  useEffect(() => {
   
  }, []);

  const handleMedicationChange = (event) => {
    setSelectedMedication(event.target.value);
  };
  const handleChange = (event) => {
    setRecentPresc((previousValue)=>({...previousValue, [event.target.id]: event.target.value}))
  };

  const handleAddPrescription = () => {
      
      const newPrescription = {
        medicationName: recentPresc.medicationName,
        dosage: recentPresc.dosage,
        dosageFrequency: recentPresc.dosageFrequency,
        startDate: recentPresc.startDate,
        prescriptionDate: recentPresc.prescriptionDate,
        practitionersEmail: recentPresc.practitionersEmail,
      };


      setPrescriptions([...prescriptions, newPrescription]);  
    
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
                    onChange={handleChange}
                    />
                  </div>
                 <div className="input-frequency">
                 <input
                   type="text"
                   placeholder="Dosage Frequency"
                   id='dosageFrequency'
                   onChange={handleChange}
                  />
                 </div>
                 <p id='start'>Start date</p>
                <input
                  type="date"
                  placeholder="Start Date "
                  id='startDate'
                  onChange={handleChange}
                />
                <p id='start'>Prescription date</p>
               <input
                 type="date"
                placeholder="Prescription Date"
                id='prescriptionDate'
                onChange={handleChange}
               />
                <input
                 type="email"
                placeholder="your email"
                id='practitionerEmail'
                onChange={handleChange}
               />
                  <div className="add-presc-button">
                  <button onClick={handleAddPrescription}>Add</button>
                  <button className='close-button' onClick={onClose}>Close</button>
                  </div>          
           <ul>
               {prescriptions.map((prescription, index) => (
             <li key={index}>
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
        </div>
    </div>
  )
} 

export default PopUp;
