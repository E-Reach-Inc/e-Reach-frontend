import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { PharmacistDashboard } from './favour/views/pharmacistFolder/pharmacistDashboard';
import { PharmacistDefaultDashboard } from './favour/views/pharmacistFolder/pharmacistDefaultDashboard';
import { PharmacistSideBar } from './favour/views/pharmacistFolder/pharmacistSideBar';
import { PharmacistSearchBar } from './favour/views/pharmacistFolder/pharmacistSearchBar';
import { PharmacistProfile } from './favour/views/pharmacistFolder/pharmacistProfile';
import { PharmacistAppointment } from './favour/views/pharmacistFolder/pharmacistAppointment';
import { PharmacistMedication } from './favour/views/pharmacistFolder/pharmacistMedication';
import { PharmacistViewRecord } from './favour/views/pharmacistFolder/pharmacistViewRecord';
import { LandingPageMainBody } from './favour/views/landingPage/landingPageMainBody';

function App() {
  return (
      <Router>
          <Routes>
             <Route path='/' element={<LandingPageMainBody/>}/>
             <Route path='*' element={<p>Page Not Found</p>}/>
             <Route path='/pharmacist-side-bar' element={<PharmacistSideBar/>}/>
             <Route path='/pharmacist-default-dashboard' element={<PharmacistDefaultDashboard/>}/>
             <Route path='/pharmacist-dashboard' element={<PharmacistDashboard/>}/>
             <Route path='/pharmacist-search-bar' element={<PharmacistSearchBar/>}/>
             <Route path='/pharmacist-profile' element={<PharmacistProfile/>}/>
             <Route path='/pharmacist-appointment' element={<PharmacistAppointment/>}/>
             <Route path='/pharmacist-medication' element={<PharmacistMedication/>}/>
             <Route path='/pharmacist-view-record' element={<PharmacistViewRecord/>}/>
          </Routes>
      </Router>
  );
}
export default App;
