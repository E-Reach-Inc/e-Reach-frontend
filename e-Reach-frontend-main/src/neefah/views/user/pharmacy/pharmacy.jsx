import React from 'react';
import {IoEyeOutline} from "react-icons/io5";
import {BsPencilFill} from "react-icons/bs";
import '../../../styles/user/pharmacy/pharmacy.css'

const PharmacyProfileTable = () => {
    const pharmacyDetail = {
        firstName: '',
        lastName: '',
        // role: '',
        email: '',
        phoneNumber: '',
        pharmacyId: '',
        hospitalId: '',
    };
    const pharmacyDetails = [
        {firstName: "Haneefah", email: "motunrayor2@gmail.com", lastName: "Sanni ", phoneNumber: "08041966608", pharmacyId: "123456789",hospitalId: "987654321", icon1: <IoEyeOutline/>, icon2:
                <BsPencilFill/> },
        {firstName: "Alayande", email: "abdulmalik@gmail.com", lastName: "Abdulmalik", phoneNumber: "07045678796", pharmacyId: "1234567890",hospitalId: "987654321",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
        {firstName: "Akaabiam", email: "ritchy@gmail.com", lastName: "Richard", phoneNumber: "0802345677", pharmacyId: "12345677890",hospitalId: "987654321",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
        {firstName: "Ayanniyi", email: "alaabdulmalik@gmail.com", lastName: "Ayantunde", phoneNumber: "0903456768", pharmacyId: "0987654321",hospitalId: "987654321",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
        {firstName: "Samuel", email: "alaabdulmalik@gmail.com", lastName: "Eniola", phoneNumber: "090345687909", pharmacyId: "45678903441",hospitalId: "987654321",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
        {firstName: "Chiemela", email: "alaabdulmalik@gmail.com", lastName: "Favour", phoneNumber: "1234567890", pharmacyId: "34567890093",hospitalId: "987654321",icon1: <IoEyeOutline/>, icon2: <BsPencilFill/>},
    ]

    return (
        <div className="pharmacy-profile">
            <table className="pharmacy-table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    {/*<th>Role</th>*/}
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>pharmacy Id</th>
                    <th>Hospital Id</th>
                    <th>Actions</th>
                </tr>
                </thead>


                {pharmacyDetails.map((pharmacyDetail, index) => (
                    <tbody>
                    <tr>
                        <td>{pharmacyDetail.firstName}</td>
                        <td>{pharmacyDetail.lastName}</td>
                        {/*<td>{pharmacyDetail.role}</td>*/}
                        <td>{pharmacyDetail.email}</td>
                        <td>{pharmacyDetail.phoneNumber}</td>
                        <td>{pharmacyDetail.pharmacyId}</td>
                        <td>{pharmacyDetail.hospitalId}</td>
                        <td>{pharmacyDetail.icon1}{" "}{pharmacyDetail.icon2}</td>

                    </tr>
                    </tbody>

                    ))}
            </table>
        </div>
    );
};
function Pharmacy() {
    return (
        <div>
            <p>Pharmacy</p>
            <PharmacyProfileTable />
        </div>
    );
}

export default Pharmacy;
