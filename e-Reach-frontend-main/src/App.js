import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { PharmacistDefaultDashboard } from './favour/views/pharmacistFolder/pharmacistDefaultDashboard';
import { PharmacistProfile} from './favour/views/pharmacistFolder/pharmacistProfile';
import { PharmacistAppointment } from './favour/views/pharmacistFolder/pharmacistAppointment';
import {PharmacistMedication} from './favour/views/pharmacistFolder/pharmacistMedication'
import {PharmacistViewRecord} from './favour/views/pharmacistFolder/pharmacistViewRecord'
import PatientRecord from './ritch/views/PatientRecord';
import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";
import {DoctorDashboard} from "./coco/views/doctor/doctorDashBoard";
import {PractitionerRegistration} from "./coco/views/auth/PractitionerRegistration";
import HospitalAdminDashboard from "./coco/views/administration/HospitalAdminDashboard";
import ActivateHospitalAdminAccount from "./bola/views/auth/activateHospitalAdminAccount";
import ActivateHospitalAccount from "./bola/views/auth/activateHospitalAccount";
import PatientSignUp from "./ritch/views/PatientSignUp";
import LoginPage from "./coco/views/auth/PractitionerLogIn";
import {PatientAppointmentOne} from "./coco/views/doctor/viewPatientAppointmentOne";
import {ViewPatientRecordOne} from "./coco/views/doctor/viewPatientRecordOne";
import {DoctorProfileOne} from "./coco/views/doctor/doctorProfileOne";
import PatientView from "./ritch/views/PatientView"
import PatientProfile from "./ritch/views/PatientProfile"
import PatientAppointment from "./ritch/views/PatientAppointment"
import {MedicalLogModal} from "./coco/views/patient/MedicalLogPopUp";
import MedicalLog from "./ritch/medicalLog/MedicalLog";
import PatientPopUp from "./ritch/views/PatientPopUp";
import { LandingPageMainBody } from "./favour/views/landingPage/landingPageMainBody";
import {ActiveLogsTableOne} from "./coco/views/doctor/doctorViewActiveLogsOne"
import Users from "./neefah/views/administration/dashboard/users/users";



function App() {

  return (
      
        <Router>
            <Routes>
              <Route path="/" element={<LandingPageMainBody/>}/>
              <Route path="landing-page" element={<LandingPageMainBody/>}/>

              <Route path='*' element={<p>Page Not Found</p>}/>
              {/*<Route path='/' element={<Lan/>}/>*/}
              <Route path='/admin-dashboard' element={<HospitalAdminDashboard/>}/>
              <Route path='/user' element={<Users/>}/>
              <Route path='/activate-hospital-account/:token' element={<ActivateHospitalAccount/>}/>
              <Route path='/activate-hospital-admin-account/:token' element={<ActivateHospitalAdminAccount/>}/>
              <Route path={"hospital-admin-signup"} element={<HospitalAdminSignUp/>}/>
                
                
              <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
              <Route path={"/doctorTab-active-logs-one"} element={<ActiveLogsTableOne/>}/>
              <Route path={"/doctorTab-patientTab-appointment-one"} element={<PatientAppointmentOne/>}/>
              <Route path={"/doctorTab-patientTab-record-one"} element={<ViewPatientRecordOne/>}/>
              <Route path={"/doctorTab-dashboard"} element={<DoctorProfileOne/>}/>
                

              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path={"/pharmacist-profile"} element={<PharmacistProfile/>}></Route>
              <Route path={"/pharmacist-appointment"} element={<PharmacistAppointment/>}></Route>
              <Route path={"/pharmacist-view-records"} element={<PharmacistViewRecord/>}></Route>
              <Route path={"/pharmacist-medication"} element={<PharmacistMedication/>}></Route>
              <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
  
                
              <Route path='/register-practitioner' element={<PractitionerRegistration/>}/>
              <Route path={"/practitioner-login"} element={<LoginPage/>}/>

                
              <Route path='/patient-view' element={<PatientView/>}/>

              <Route path='/patient-log-view' element={<PatientPopUp/>}/>
              <Route path='/patient-profile' element={<PatientProfile/>}/>
              <Route path='/patient-record' element={<PatientRecord/>}/>
              <Route path='/patient-appointment' element={<PatientAppointment/>}/>
              <Route path='/patient-signUp' element={<PatientSignUp/>}/>
              <Route path={'/admin-create-medical-log'} element={<MedicalLogModal/>}/>

              <Route path='/medical-log' element={<MedicalLog/>}/>
              <Route path='/patient-registration' element={<PatientSignUp/>}/>  
            </Routes>
        </Router>
      
  );
}
export default App;