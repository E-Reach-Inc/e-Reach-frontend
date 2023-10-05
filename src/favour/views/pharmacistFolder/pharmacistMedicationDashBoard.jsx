import React from 'react'
import '../../styles/pharmacistFolder/pharmacistMedicationDashboard.css'
import {useNavigate} from "react-router-dom";

export const PharmacistMedicineDashBoard =()=>{
    const medicine = [
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001',
        },
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001',
        },
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001',
        },
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001',
        },
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001',
        },
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001',
        },
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001',
        },
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001',
        },
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001',
        },
        {
            MedicationName: 'Favour chiemela',
            Dose: 'Consultation',
            Frequency: '22/12/2023',
            Condition: '10001'
        }

    ]
    const navigate = useNavigate();
    const handleButtonClick =()=>{
        navigate("/pharmacist-medication")
    }
    return(
        <div>
            <div className= 'med-holder'>
                <div className= 'med-button'>
                    <div className= 'med-text'>
                        <h3>Medication</h3>
                    </div>
                    <div className= 'browse-all-med'>
                        <button onClick={handleButtonClick}>Browse All</button>
                    </div>
                </div>
                <table className= 'med-table'>
                    <thead>
                    <tr>
                        <th >Medication name</th>
                        <th >Dose</th>
                        <th>Frequency</th>
                        <th>Condition</th>
                    </tr>
                    </thead>
                    <tbody>
                    {medicine.map((medicine, index) => (
                        <tr key={index}>
                            <td >{medicine.MedicationName}</td>
                            <td >{medicine.Dose}</td>
                            <td >{medicine.Frequency}</td>
                            <td >{medicine.Condition}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}