import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { PharmacistDefaultDashboard } from './favour/views/pharmacistFolder/pharmacistDefaultDashboard';
import { LandingPageMainBody } from './favour/views/landingPage/landingPageMainBody';
import PatientRecord from './ritch/views/PatientRecord';
import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";
import {DoctorDashboard} from "./coco/views/doctor/doctorDashBoard";
import {DoctorRegistration} from "./coco/views/auth/DoctorRegistration";

function App() {
  return (
      <Router>
          <Routes>
              <Route path='/' element={<p>Home</p>}/>
              <Route path='/' element={<LandingPageMainBody/>}/>
              <Route path='*' element={<p>Page Not Found</p>}/>
              <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
              <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
              <PatientRecord/>
              <HospitalAdminSignUp/>
              <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
              <Route path='/doctor-registration' element={<DoctorRegistration/>}/>
          </Routes>
      </Router>
  );
}
export default App;