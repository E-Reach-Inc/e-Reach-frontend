import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { PharmacistDefaultDashboard } from './favour/views/pharmacistFolder/pharmacistDefaultDashboard';
import { LandingPageMainBody } from './favour/views/landingPage/landingPageMainBody';
import PatientRecord from './ritch/views/PatientRecord';
import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";
import {DoctorDashboard} from "./coco/views/doctor/doctorDashBoard";
import {DoctorRegistration} from "./coco/views/auth/DoctorRegistration";
import {DoctorProfileOne} from "./coco/views/doctor/doctorProfileOne";
import {PatientAppointmentOne} from "./coco/views/doctor/viewPatientAppointmentOne";
import {ViewPatientRecordOne} from "./coco/views/doctor/viewPatientRecordOne";
import {ActiveLogsTableOne} from "./coco/views/doctor/doctorViewActiveLogsOne";
import HospitalAdminDashboard from "./coco/views/administration/HospitalAdminDashboard";

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<p>Home</p>}/>
              <Route path='/landing-page' element={<LandingPageMainBody/>}/>
              <Route path='*' element={<p>Page Not Found</p>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
              <Route path='/patient-record' element={<PatientRecord/>}/>
              <Route path='/admin-signUp' element={<HospitalAdminSignUp/>}/>
              <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
              <Route path='/doctor-registration' element={<DoctorRegistration/>}/>
              <Route path='/doctor-profile-one' element={<DoctorProfileOne/>}/>
              <Route path='/doctor-patient-appointment-one' element={<PatientAppointmentOne/>}/>
              <Route path='/doctor-patient-record-one' element={<ViewPatientRecordOne/>}/>
              <Route path='/doctor-active-logs-one' element={<ActiveLogsTableOne/>}/>
              <Route path='/admin-dashboard' element={<HospitalAdminDashboard/>}/>
              <Route path='/' element={<LandingPageMainBody/>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
                <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
                <PatientRecord/>
                <Route path={"hospital-admin-signup"} element={<HospitalAdminSignUp/>}></Route>
                <Route path={"/"} element={<LandingPageMainBody/>}></Route>
            </Routes>
      </Router>
  );
}
export default App;
