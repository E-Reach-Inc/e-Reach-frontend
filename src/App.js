import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { PharmacistDefaultDashboard } from './favour/views/pharmacistFolder/pharmacistDefaultDashboard';
import { LandingPageMainBody } from './favour/views/landingPage/landingPageMainBody';
import { PharmacistProfile} from './favour/views/pharmacistFolder/pharmacistProfile';
import { PharmacistAppointment } from './favour/views/pharmacistFolder/pharmacistAppointment';
import {PharmacistMedication} from './favour/views/pharmacistFolder/pharmacistMedication'
import {PharmacistViewRecord} from './favour/views/pharmacistFolder/pharmacistViewRecord'
import PatientRecord from './ritch/views/PatientRecord';
import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";
import {DoctorDashboard} from "./coco/views/doctor/doctorDashBoard";
import {DoctorRegistration} from "./coco/views/auth/DoctorRegistration";
import HospitalAdminDashboard from "./coco/views/administration/HospitalAdminDashboard";


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
              <Route path='/landing-page' element={<LandingPageMainBody/>}/>
              <Route path='/' element={<LandingPageMainBody/>}/>
              <Route path='*' element={<p>Page Not Found</p>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
              <Route path={"/pharmacist-profile"} element={<PharmacistProfile/>}></Route>
              <Route path={"/pharmacist-appointment"} element={<PharmacistAppointment/>}></Route>
              <Route path={"/pharmacist-view-records"} element={<PharmacistViewRecord/>}></Route>
              <Route path={"/pharmacist-medication"} element={<PharmacistMedication/>}></Route>
              <Route path='/admin-dashboard' element={<HospitalAdminDashboard/>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
              <Router path={"patient-records"} element={<PatientRecord/>}/>
              <Route path={"hospital-admin-signup"} element={<HospitalAdminSignUp/>}>
            </Routes>
        <Router/>
  );
}
export default App;
