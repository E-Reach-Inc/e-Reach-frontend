import React from 'react';
import {IoEyeOutline} from "react-icons/io5";
import {BsPencilFill} from "react-icons/bs";
import '../../../../../styles/administration/dashboard/users/doctorsTab/doctorsTab.css'

const DoctorProfileTable = () => {
    const doctorData = {
        firstName: '',
        lastName: '',
        doctorrole: '',
        email: '',
        phoneNumber: '',
        doctorId: '',
        hospitalId: '',
    };
    const patientDetails = [
        {firstName: "Haneefah", email: "alaabdulmalik@gmail.com", lastName: "Sanni ", phoneNumber: "08041966608", doctorIdentificationNumber: "123456789",doctorrole: "paediatrician",doctorId: "1234",hospitalId: "567891234"},
        {firstName: "Alayande", email: "alaabdulmalik@gmail.com", lastName: "Abdulmalik", phoneNumber: "07045678796", doctorIdentificationNumber: "1234567890",doctorrole: "cadiologist",doctorId: "3456",hospitalId: "567891234"},
        {firstName: "Akaabiam", email: "alaabdulmalik@gmail.com", lastName: "Richard", phoneNumber: "0802345677", doctorIdentificationNumber: "12345677890",doctorrole: "geriatrician",doctorId: "7899",hospitalId: "567891234"},
        {firstName: "Ayanniyi", email: "alaabdulmalik@gmail.com", lastName: "Ayantunde", phoneNumber: "0903456768", doctorIdentificationNumber: "0987654321",doctorrole: "psychologist",doctorId: "9113",hospitalId: "567891234"},
        {firstName: "Samuel", email: "alaabdulmalik@gmail.com", lastName: "Eniola", phoneNumber: "090345687909", doctorIdentificationNumber: "45678903441",doctorrole: "ent",doctorId: "8456",hospitalId: "567891234"},
        {firstName: "Chiemela", email: "alaabdulmalik@gmail.com", lastName: "Favour", phoneNumber: "1234567890", doctorIdentificationNumber: "34567890093",doctorrole: "psysiotherapist",doctorId: "7654",hospitalId: "567891234"},
    ]

    return (
        <div className="doctor-profile">
            <table className="doctor-table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>doctorRole</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Doctor Id</th>
                    <th>Hospital Id</th>
                    <th>Actions</th>
                </tr>
                </thead>
                {patientDetails.map((doctorDetail, index) => (
                <tbody>
                <tr>
                    <td>{doctorDetail.firstName}</td>
                    <td>{doctorDetail.lastName}</td>
                    <td>{doctorDetail.doctorrole}</td>
                    <td>{doctorDetail.email}</td>
                    <td>{doctorDetail.phoneNumber}</td>
                    <td>{doctorDetail.doctorId}</td>
                    <td>{doctorDetail.hospitalId}</td>
                    <td>
                        <div>
                            <IoEyeOutline/>
                            <BsPencilFill/>
                        </div>
                    </td>
                </tr>
            </tbody>
                ))}
            </table>
        </div>
    );
};
function DoctorsTab() {
    return (
        <div>
            <p>Doctor</p>
            <DoctorProfileTable />
        </div>
    );
}

export default DoctorsTab;
