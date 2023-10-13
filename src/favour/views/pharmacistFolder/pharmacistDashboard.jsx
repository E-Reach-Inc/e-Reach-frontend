import React from 'react'
import {PharmacistSideBar} from "./pharmacistSideBar";
import {PharmacistSearchBar} from "./pharmacistSearchBar";
import { PharmacistProfileDashboard } from './pharmacistProfileDashboard';
import "../../styles/pharmacistFolder/pharmacistDashboard.css"
import {PharmacistAppointmentDashboard} from "./pharmacistAppointmentDashboard";
import {PharmacistMedicineDashBoard} from "./pharmacistMedicationDashBoard";
import {PharmacistViewRecordsDashboard} from "./pharmacistViewRecordsDashboard";

export const PharmacistDashboard = () => {
                
    return(

        <div className= 'main-con'>
            <div className= 'sec-holder'>
                   <PharmacistSideBar/>
                <div className= 'hold'>
                    <PharmacistSearchBar/>
                    <p id='dash'>Dashboard</p>
                    <div className= 'proapp'>
                        <div className='protwo'>
                            <PharmacistProfileDashboard
                            //  props={practitionerData}
                             />
                        </div>
                        <div className='apptwo'>
                            <PharmacistAppointmentDashboard/>
                        </div>
                    </div>
                    <div className='medrec'>
                        <div>
                            <PharmacistMedicineDashBoard/>
                        </div>
                        <div>
                            <PharmacistViewRecordsDashboard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}