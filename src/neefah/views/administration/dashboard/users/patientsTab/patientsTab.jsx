import React from 'react';
import '../../../../../styles/administration/dashboard/users/patientsTab/patientsTab.css'
import {IoEyeOutline} from "react-icons/io5";
import {BsPencilFill} from "react-icons/bs";
import user from "../../user";

const PatientProfileTable = () => {
    const patientDetail = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        patientIdentificationNumber: '',
    };

    const patientDetails = [
        {firstName: "Haneefah", email: "motunrayor2@gmail.com", lastName: "Sanni ", phoneNumber: "08041966608", patientIdentificationNumber: "123456789", icon1: <IoEyeOutline/>, icon2:
        <BsPencilFill/> },
        {firstName: "Alayande", email: "abdulmalik@gmail.com", lastName: "Abdulmalik", phoneNumber: "07045678796", patientIdentificationNumber: "1234567890",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
        {firstName: "Akaabiam", email: "ritchy@gmail.com", lastName: "Richard", phoneNumber: "0802345677", patientIdentificationNumber: "12345677890",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
        {firstName: "Ayanniyi", email: "alaabdulmalik@gmail.com", lastName: "Ayantunde", phoneNumber: "0903456768", patientIdentificationNumber: "0987654321",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
        {firstName: "Samuel", email: "alaabdulmalik@gmail.com", lastName: "Eniola", phoneNumber: "090345687909", patientIdentificationNumber: "45678903441",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
        {firstName: "Chiemela", email: "alaabdulmalik@gmail.com", lastName: "Favour", phoneNumber: "1234567890", patientIdentificationNumber: "34567890093",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
    ]
    return (
        <div className="patient-profile">
            {/*<h2>PatientsTab Profile</h2>*/}
            <table className="profile-table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Patient Id</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {patientDetails.map((patientDetail, index) => (
                    <tbody>
                    <tr>
                        <td>{patientDetail.firstName}</td>
                        <td>{patientDetail.lastName}</td>
                        <td>{patientDetail.email}</td>
                        <td>{patientDetail.phoneNumber}</td>
                        <td>{patientDetail.patientIdentificationNumber}</td>

                        <td>{patientDetail.icon1}{" "}{patientDetail.icon2}</td>

                    </tr>
                    </tbody>
                ))}

            </table>
        </div>
    );
};
function PatientsTab(users) {
    return (
        <div>
            <p>Patient</p>
            <ul>
                {users.map((user)=> (
                        <li key={user.id}>{user.name}></li>
                    ))}
            </ul>
            <PatientProfileTable />
        </div>
    );
}

export default PatientsTab;























