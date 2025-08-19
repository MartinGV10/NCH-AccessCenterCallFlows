import './App.css';
import { Routes, Route } from 'react-router-dom'; // Import Route, Routes, and Link
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer';
import Specialties from './Specialties';
import Checklist from './Checklist';
import Reason from './Reason';
import Insurance from './Insurance';

function App() {
  return (
    <div className='app'>
      <div className="main-cont">
      <Nav/>
      {/* Routing logic should be inside Routes */}
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/specialties" element={<Specialties />} />  {/* Define the route */}
        <Route path="/specialties/palliative" element={<Checklist />} />  {/* Define the route */}
        <Route path="/specialties/palliative/reason" element={<Reason />} />
        <Route path="/specialties/palliative/reason/insurance" element={<Insurance/>}/>
      </Routes>
      </div>
      <div className="foot">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
