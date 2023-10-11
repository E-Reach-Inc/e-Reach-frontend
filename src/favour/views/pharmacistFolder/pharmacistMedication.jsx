import React from 'react'
import '../../styles/pharmacistFolder/pharmacistMedication.css'
import {PharmacistSideBar} from "./pharmacistSideBar";
import {PharmacistSearchBar} from "./pharmacistSearchBar";

export  const PharmacistMedication =()=>{
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
        // },
        // {
        //     MedicationName: 'Favour chiemela',
        //     Dose: 'Consultation',
        //     Frequency: '22/12/2023',
        //     Condition: '10001'
        // },
        // {
        //     MedicationName: 'Favour chiemela',
        //     Dose: 'Consultation',
        //     Frequency: '22/12/2023',
        //     Condition: '10001'
        // },
        // {
        //     MedicationName: 'Favour chiemela',
        //     Dose: 'Consultation',
        //     Frequency: '22/12/2023',
        //     Condition: '10001'
        // },
        // {
        //     MedicationName: 'Favour chiemela',
        //     Dose: 'Consultation',
        //     Frequency: '22/12/2023',
        //     Condition: '10001'
        // }

    ]
    return(
        <div className= 'first-con'>
            <div className= 'medi-con'>
                <PharmacistSideBar/>
                <div className='medi-hold'>
                    <PharmacistSearchBar/>
                    <h2 id='appont'>Medication</h2>
                    <div className= 'medi-holder'>
                        <div className= 'medi-button'>
                            <div className= 'medi-text'>
                                <h3>Medication</h3>
                            </div>
                            <div className="input-con">
                                <input
                                    type="text"
                                    className="search-bar-two"
                                    placeholder="search..."
                                    aria-label= "Search"
                                />
                                <button type="button" className="search-button-two">
                                    Search
                                </button>
                            </div>
                            <div className= 'browse-all-medi'>
                                <button>Browse All</button>
                            </div>
                        </div>
                        <table className= 'medi-table'>
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
            </div>
        </div>
    )
}