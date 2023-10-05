import React, {useEffect, useState} from 'react';
import axios from "axios";

function PrescriptionsEntry() {
    const [testName, setTestName] = useState('');
    const [prescriptions, setPrescriptions] = useState('');

    useEffect(() => {
        const fetchMedications = () => {
            axios.get("", )
        }
    }, []);


    const handleTestSubmit = () => {
        console.log('Test Entry Submitted:', { testName, testResult: prescriptions });
    };

    return (
        <div>
            <h3>Create Prescriptions Entry</h3>
            <input
                type="checkbox"
                onChange={(e) => setTestName(e.target.value)}
            />
            <input
                type="checkbox"
                onChange={(e) => setPrescriptions(e.target.value)}
            />
            <button id="prescriptionFormButton" onClick={handleTestSubmit}>Submit</button>
        </div>
    );
}

export default PrescriptionsEntry;
