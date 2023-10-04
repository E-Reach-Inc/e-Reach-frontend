import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { PharmacistDefaultDashboard } from './favour/views/pharmacistFolder/pharmacistDefaultDashboard';
import { LandingPageMainBody } from './favour/views/landingPage/landingPageMainBody';
import PatientRecord from './ritch/views/PatientRecord';
import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";


function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' element={<LandingPageMainBody/>}/>
                <Route path='*' element={<p>Page Not Found</p>}/>
                <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
                <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
                <PatientRecord/>
                <Route path={"hospital-admin-signup"} element={<HospitalAdminSignUp/>}></Route>
                <Route path={"/"} element={<LandingPageMainBody/>}></Route>
            </Routes>
      </Router>
      
    </div>
  );
}
export default App;
