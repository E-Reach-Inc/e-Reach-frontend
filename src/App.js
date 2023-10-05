import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { LandingPageMainBody } from './favour/views/landingPage/landingPageMainBody';
import PatientRecord from './ritch/views/PatientRecord';
import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";
import {DoctorDashboard} from "./coco/views/doctor/doctorDashBoard";
import {PractitionerRegistration} from "./coco/views/auth/PractitionerRegistration";
import HospitalAdminDashboard from "./coco/views/administration/HospitalAdminDashboard";
import {PharmacistDefaultDashboard} from "./favour/views/pharmacistFolder/pharmacistDefaultDashboard";
import PatientSignUp from "./ritch/views/PatientSignUp";
import LoginPage from "./coco/views/auth/PractitionerLogIn";
import {ActiveLogsTableOne} from "./coco/views/doctor/doctorViewActiveLogsOne";
import {PatientAppointmentOne} from "./coco/views/doctor/viewPatientAppointmentOne";
import {ViewPatientRecordOne} from "./coco/views/doctor/viewPatientRecordOne";
import {DoctorProfileOne} from "./coco/views/doctor/doctorProfileOne";
import PatientView from "./ritch/views/PatientView"
import PatientProfile from "./ritch/views/PatientProfile"
import PatientAppointment from "./ritch/views/PatientAppointment"
import {MedicalLogModal} from "./coco/views/patient/MedicalLogPopUp";


function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<p>Home</p>}/>
              <Route path='/landing-page' element={<LandingPageMainBody/>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path='/admin-dashboard' element={<HospitalAdminDashboard/>}/>
              <Route path='/landing-page' element={<LandingPageMainBody/>}/>
              <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
              <Route path='/patient-registration' element={<PatientSignUp/>}/>
              <Route path='/register-practitioner' element={<PractitionerRegistration/>}/>
              <Route path='*' element={<p>Page Not Found</p>}/>
              <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
              <Route path={"/patient-record"} element={<PatientRecord/>}/>
              <Route path={"/hospital-admin-signup"} element={<HospitalAdminSignUp/>}/>
              <Route path={"/practitioner-login"} element={<LoginPage/>}/>
              <Route path={"/doctor-active-logs-one"} element={<ActiveLogsTableOne/>}/>
              <Route path={"/doctor-patient-appointment-one"} element={<PatientAppointmentOne/>}/>
              <Route path={"/doctor-patient-record-one"} element={<ViewPatientRecordOne/>}/>
              <Route path={"/doctor-dashboard"} element={<DoctorProfileOne/>}/>
              <Route path='/patient-view' element={<PatientView/>}/>
              <Route path='/patient-profile' element={<PatientProfile/>}/>
              <Route path='/patient-record' element={<PatientRecord/>}/>
              <Route path='/patient-appointment' element={<PatientAppointment/>}/>
              <Route path='/patient-signUp' element={<PatientSignUp/>}/>
              <Route path='/patient-medicalLog' element={<MedicalLogModal/>}/>
         </Routes>
      </Router>
  );
}
export default App;
