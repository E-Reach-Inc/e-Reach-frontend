
import {PharmacistSideBar } from './pharmacistSideBar';
import {PharmacistSearchBar} from './pharmacistSearchBar'
import {PharmacistAppointmentDashboard} from "./pharmacistAppointmentDashboard";
import {PharmacistMedicineDashBoard} from "./pharmacistMedicationDashBoard";
import {PharmacistViewRecordsDashboard} from "./pharmacistViewRecordsDashboard";
import {PharmacistProfileDashboard} from "./pharmacistProfileDashboard";

export const PharmacistDefaultDashboard = () => {
    return(
        <div className="background-holder">
            <div className= 'main-con'>
                <div className= 'sec-holder'>
                    <PharmacistSideBar/>
                    <div className= 'hold'>
                        <PharmacistSearchBar/>
                        <h2 id='dash'>Dashboard</h2>
                        <div className= 'proapp'>
                            <div className='protwo'>
                                <PharmacistProfileDashboard/>
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
        </div>
    )
}