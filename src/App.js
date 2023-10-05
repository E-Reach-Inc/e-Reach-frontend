import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { LandingPageMainBody } from './favour/views/landingPage/landingPageMainBody';
import PatientRecord from './ritch/views/PatientRecord';
import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";
import {DoctorDashboard} from "./coco/views/doctor/doctorDashBoard";
import {DoctorRegistration} from "./coco/views/auth/DoctorRegistration";
import HospitalAdminDashboard from "./coco/views/administration/HospitalAdminDashboard";
import {PharmacistDefaultDashboard} from "./favour/views/pharmacistFolder/pharmacistDefaultDashboard";
import ActivateHospitalAdminAccount from "./bola/views/auth/activateHospitalAdminAccount";
import ActivateHospitalAccount from "./bola/views/auth/activateHospitalAccount";
import { ActiveLogsTableOne } from "./coco/views/doctor/doctorViewActiveLogsOne";

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<p>Home</p>}/>
              <Route path='/activate-hospital-account/:token' element={<ActivateHospitalAccount/>}/>
              <Route path='/activate-hospital-admin-account/:token' element={<ActivateHospitalAdminAccount/>}/>
              <Route path='/landing-page' element={<LandingPageMainBody/>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path='/admin-dashboard' element={<HospitalAdminDashboard/>}/>
              <Route path='/' element={<LandingPageMainBody/>}/>
              <Route path='*' element={<p>Page Not Found</p>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
              {/*<Router path={""} element={<PatientRecord/>}/>*/}
              <Route path={"hospital-admin-signup"} element={<HospitalAdminSignUp/>}/>
              <Route path={"/"} element={<LandingPageMainBody/>}/>
              <Route path="doctor-active-logs-one" element={<ActiveLogsTableOne/>}/>
              <Route path="doctors-dashboard" element={<DoctorDashboard/>}/>
         </Routes>
      </Router>
  );
}
export default App;
