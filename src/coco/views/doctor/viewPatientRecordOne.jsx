import {DoctorSideBar} from "./doctorSideBar";
import {SearchBar} from "./doctorSearchBar";
import ViewLog from "../../../coco/assets/icons/doc-view-log.svg";
import EditLog from "../../../coco/assets/icons/doc-edit-log.svg";
import React, {useState} from "react";
import "../../../coco/styles/doctor/viewPatientRecordOne.css"
import RecordPopUp from "./recordPopUp"


export const ViewPatientRecordOne= () => {
    const [recordButtonPopUp, setRecordButtonPopUp] = useState(false);
    const [selectedPatientRecord, setSelectedPatientRecord] = useState(null);

    const openRecordPopUp = (patientRecordData) => {
        setSelectedPatientRecord(patientRecordData);
        setRecordButtonPopUp(true);
    }

    const closeRecordPopUp = () => {
        setSelectedPatientRecord(null);
        setRecordButtonPopUp(false);
    }
    const patientRecordData = [
        {primaryCentre: 'Hospital A', dateCreated: '2023-09-27', lastUpdated: '10:30 AM', patientId: 1},
        {primaryCentre: 'Clinic B', dateCreated: '2023-09-26', lastUpdated: '02:45 PM', patientId: 2},
        {primaryCentre: 'Medical Center C', dateCreated: '2023-09-25', lastUpdated: '09:15 AM', patientId: 3},
        {primaryCentre: 'Urgent Care D', dateCreated: '2023-09-24', lastUpdated: '11:00 AM', patientId: 4},
    ];

    return(
        <div className="Doc-Records-Main-Frame">
            <div className="doc-Records-side-bar-hold">
                <DoctorSideBar/>
            </div>
            <div className="doc-Records-second-side">
                <div className="doc-search-bar-hold">
                    <SearchBar/>
                </div>
                <div className="doc-Records-details-holder">
                    <div className="Records-left-profile">
                        <div className="Records-title" >
                            <h2>View Patient Records</h2>
                            <input
                                type="text"
                                className="doc-Records-search-bar"
                                placeholder="search..."
                                aria-label= "Search"
                                // value={searchQuery}
                                // onChange={(e)=> setSearchQuery(e.target.value)}
                            />
                            <button type="button" className="doc--Records-search-button">
                                Search
                            </button>
                        </div>
                        <table className= 'Records-table'>
                            <thead>
                            <tr>
                                <th >Primary Centre</th>
                                <th >Date Created</th>
                                <th >Last Updated</th>
                                <th >Patient Id</th>
                                <th >Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {patientRecordData.map((patientRecordData, index) => (
                                <tr key={index}>
                                    <td >{patientRecordData.primaryCentre}</td>
                                    <td >{patientRecordData.dateCreated}</td>
                                    <td >{patientRecordData.lastUpdated}</td>
                                    <td >{patientRecordData.patientId}</td>
                                    <td >
                                        <img onClick={() => (openRecordPopUp(patientRecordData))}
                                             id="records-action-buttons" src={ViewLog} alt="view">
                                        </img>
                                        {/*<img onClick={() => (patientRecordData.patientId)}*/}
                                        {/*     id="records-action-buttons" src={EditLog} alt="edit">*/}
                                        {/*</img>*/}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <RecordPopUp isOpen={recordButtonPopUp} isClose={closeRecordPopUp} patientRecordData={selectedPatientRecord}/>
        </div>
    )
}