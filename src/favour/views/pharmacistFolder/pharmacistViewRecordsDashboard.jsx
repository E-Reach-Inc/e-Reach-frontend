import React from 'react'
import '../../styles/pharmacistFolder/pharmacistViewRecordDashboard.css'
import {useNavigate} from "react-router-dom";

export const PharmacistViewRecordsDashboard =()=>{
    const viewlog = [
        {
            
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },
        {
            Date: 'Favour chiemela',
            Name: 'Consultation',
            Result: '22/12/2023',
        },

    ]
    const navigate = useNavigate();
    const handleButtonClick =()=>{
        navigate("/viewlog")
    }
    return(
        <div>
            <div className= 'vie-holder'>
                <div className= 'vie-button'>
                    <div className= 'vie-text'>
                        <h3>ViewLogs</h3>
                    </div>
                    <div className= 'browse-all-vie'>
                        <button onClick={handleButtonClick}>Browse All</button>
                    </div>
                </div>
                <table className= 'vie-table'>
                    <thead>
                    <tr>
                        <th >Date</th>
                        <th >Name</th>
                        <th>Result</th>
                    </tr>
                    </thead>
                    <tbody>
                    {viewlog.map((viewlog, index) => (
                        <tr key={index}>
                            <td >{viewlog.Date}</td>
                            <td >{viewlog.Name}</td>
                            <td >{viewlog.Result}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}