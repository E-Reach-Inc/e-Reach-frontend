import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { LandingPageMainBody } from './favour/views/landingPage/landingPageMainBody';
import PatientRecord from './ritch/views/PatientRecord';
import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";
import {DoctorDashboard} from "./coco/views/doctor/doctorDashBoard";
import {DoctorRegistration} from "./coco/views/auth/DoctorRegistration";
import HospitalAdminDashboard from "./coco/views/administration/HospitalAdminDashboard";

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<p>Home</p>}/>
              <Route path='/landing-page' element={<LandingPageMainBody/>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path='/admin-dashboard' element={<HospitalAdminDashboard/>}/>
              <Route path='/' element={<LandingPageMainBody/>}/>
              <Route path='*' element={<p>Page Not Found</p>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
              //<Router path={""} element={<PatientRecord/>}/>
              <Route path={"hospital-admin-signup"} element={<HospitalAdminSignUp/>}>
              <Route path={"/"} element={<LandingPageMainBody/>}>
         </Routes>
      </Router>
  );
}
export default App;
