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

                    <div className="prescription-inputs-con">
                   

<select value={selectedMedication} onChange={handleMedicationChange} className='select-input'>
   <option value="">Select Medication</option>
    {prescriptions.map((prescription) => (
  <option key={prescription.id} value={prescription.medicationName}>
   {prescription.medicationName}
  </option>
   ))}
 </select>

<input
   type="text"
   placeholder="Dosage"
  value={dosage}
 onChange={handleDosageChange}
/>
<input
type="text"
placeholder="Dosage Frequency"
value={dosageFrequency}
onChange={handleDosageFrequencyChange}
/>
<p>Start date</p>
<input
type="date"
placeholder="Start Date "
value={startDate}
onChange={handleStartDateChange}
/>
<p>Prescription date</p>
<input
type="date"
placeholder="Prescription Date"
value={prescriptionDate}
onChange={handlePrescriptionDateChange}
/>
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
