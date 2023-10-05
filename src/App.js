import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { PharmacistDefaultDashboard } from './favour/views/pharmacistFolder/pharmacistDefaultDashboard';
import { LandingPageMainBody } from './favour/views/landingPage/landingPageMainBody';
import { PharmacistProfile} from './favour/views/pharmacistFolder/pharmacistProfile';
import { PharmacistAppointment } from './favour/views/pharmacistFolder/pharmacistAppointment';
import {PharmacistMedication} from './favour/views/pharmacistFolder/pharmacistMedication'
import {PharmacistViewRecord} from './favour/views/pharmacistFolder/pharmacistViewRecord'
// import PatientRecord from './ritch/views/PatientRecord';
// import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<LandingPageMainBody/>}/>
                <Route path='*' element={<p>Page Not Found</p>}/>
                <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
                <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
                <Route path={"/pharmacist-profile"} element={<PharmacistProfile/>}></Route>
                <Route path={"/pharmacist-appointment"} element={<PharmacistAppointment/>}></Route>
                <Route path={"/pharmacist-view-records"} element={<PharmacistViewRecord/>}></Route>
                <Route path={"/pharmacist-medication"} element={<PharmacistMedication/>}></Route>
            </Routes>
      </Router>
      
    </div>
  );
}
export default App;
