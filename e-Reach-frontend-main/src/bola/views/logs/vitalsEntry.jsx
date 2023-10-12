import React, { useState } from 'react';
import "../../styles/components/medicalLogs/medicalLog.css"


const initialVitalsValue = {
    dateTaken: '',
    bloodPressure: '',
    heartRate: '',
    temperature: '',
    respiratoryRate: '',
}

function VitalsEntry() {
    const [vitals, setVitals] = useState(initialVitalsValue);

    const finaVitalsValue = {
        dateTaken: vitals.dateTaken,
        bloodPressure: vitals.bloodPressure,
        heartRate: vitals.heartRate,
        temperature: vitals.temperature,
        respiratoryRate: vitals.respiratoryRate,
        officerEmail: localStorage.getItem("officer email"),
        nameOfPractitionerThatCreatedIt: localStorage.getItem("officer name")
    }

    const handleVitalsSubmit = () => {

    };

    function handleInputChanges(event){
        event.preventDefault()
        // setVitals({...prevState, data:event.target.value})
    }

    return (
        <div className={"Entry-Form-Frame-One"}>
            <h3>Create New Vitals</h3>
            <input type="date" placeholder="date-taken"
                onChange={handleInputChanges}
            />
             <input type="text" placeholder="blood pressure"
                onChange={handleInputChanges}
            />
            <input type="text" placeholder="temperature"
                   onChange={handleInputChanges}
            />
             <input type="text" placeholder="heart rate"
                onChange={handleInputChanges}
            />
               <input type="text" placeholder="respiratory rate"
                onChange={handleInputChanges}
            />
            <button id="vitalFormButton" onClick={handleVitalsSubmit}>Submit</button>

        </div>
    );
}

export default VitalsEntry;
