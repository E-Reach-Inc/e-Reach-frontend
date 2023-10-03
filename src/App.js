import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {DoctorSideBar} from "./coco/views/doctor/doctorSideBar"
import {SearchBar} from "./coco/views/doctor/doctorSearchBar";
import {DoctorProfileOne} from "./coco/views/doctor/doctorProfileOne";
import {ActiveLogsTableOne} from "./coco/views/doctor/doctorViewActiveLogsOne";
import {PatientAppointmentOne} from "./coco/views/doctor/viewPatientAppointmentOne";
import {ViewPatientRecordOne} from "./coco/views/doctor/viewPatientRecordOne";
import {DoctorDashboard} from "./coco/views/doctor/doctorDashBoard";
import {DoctorRegistration} from "./coco/views/auth/DoctorRegistration";

function App() {
  return (
      <Router>
          <Routes>
                <Route path='/' element={<p>Home</p>}/>
                <Route path='/doctor-side-bar' element={<DoctorSideBar/>}/>
                <Route path='/doctor-search-bar' element={<SearchBar/>}/>
                <Route path='/doctor-profile-one' element={<DoctorProfileOne/>}/>
                <Route path='/doctor-active-logs-one' element={<ActiveLogsTableOne/>}/>
                <Route path='/doctor-patient-appointment-one' element={<PatientAppointmentOne/>}/>
                <Route path='/doctor-patient-record-one' element={<ViewPatientRecordOne/>}/>
                <Route path='/doctor-dashboard' element={<DoctorDashboard/>}/>
                    <Route path='/doctor-registration' element={<DoctorRegistration/>}/>
          </Routes>
      </Router>
  );
}

export default App;