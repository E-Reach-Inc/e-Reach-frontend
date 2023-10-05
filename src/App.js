// import './App.css';
// import PatientAppointmentTwo from './ritch/views/PatientAppointmentTwo';
// import PatientRecordTwo from './ritch/views/PatientRecordTwo';
// import PatientProfileTwo from './ritch/views/PatientProfileTwo';
// import PatientRecord from './ritch/views/PatientRecord';
// import PatientAppointment from './ritch/views/PatientAppointment';
// import PatientProfile from './ritch/views/PatientProfile';
// import PatientSideBar from './ritch/views/PatientSideBar';
// import PatientNavBar from './ritch/views/PatientNavBar';
// import PatientSignUp from './ritch/views/PatientSignUp';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import PatientView from './ritch/views/PatientView';
import PatientProfile from './ritch/views/PatientProfile'
import PatientRecord from './ritch/views/PatientRecord';
import PatientAppointment from './ritch/views/PatientAppointment';
import PatientSignUp from './ritch/views/PatientSignUp'
// import TestLog from './ritch/medicalLog/TestLog';
// import DoctorsReportLog from './ritch/medicalLog/DoctorsReportLog';
// import PrescriptionLog from './ritch/medicalLog/PrescriptionLog';
import MedicalLog from './ritch/medicalLog/MedicalLog';
// import HospitalAdminSignUp from "./bola/views/auth/hospitalAdminSignUp";

function App() {
  return (
    <Router>
       <Routes>
          <Route path='/' element={<p>home</p>}/>
          <Route path='/patient-view' element={<PatientView/>}/>
          <Route path='/patient-profile' element={<PatientProfile/>}/>
          <Route path='/patient-record' element={<PatientRecord/>}/>
          <Route path='/patient-appointment' element={<PatientAppointment/>}/>
          <Route path='/patient-signUp' element={<PatientSignUp/>}/>
          <Route path='/medical-log' element={<MedicalLog/>}/>


          {/* <Route path='/prescription-log' element={<PrescriptionLog/>}/>
          <Route path='/doctors-report-log' element={<DoctorsReportLog/>}/>
          <Route path='/test-log' element={<TestLog/>}/> */}


       </Routes>
    </Router>
  );
}


export default App;
