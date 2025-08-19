import './Specialties.css'
import appt from'./assets/SP-Images/appt-confirm.png'
import gt from'./assets/SP-Images/GT-home.jpg'
import gyno from'./assets/SP-Images/Gyno.jpg'
import id from'./assets/SP-Images/ID-01.jpg'
import med from'./assets/SP-Images/MED-01.jpg'
import north from'./assets/SP-Images/NORTH-01.jpg'
import vasc from'./assets/SP-Images/Vasc.jpg'
import pal from './assets/SP-Images/palliative.jpg'
import { Link } from 'react-router-dom';

function Specialties() {
  return (
    <div>
        <div className="instr-text">
            <h2 className='instr'>Clinics</h2>
        </div>
        <div className="sp-container">
            <div className="selection">
                <Link to="./palliative">
                <img src={pal} alt="Palliative" className="sp-card" />
                <h3 className="sp-title">NCH Palliative Care</h3>
                </Link>
            </div>

            <div className="selection">
                <img src={id} alt="ID" className="sp-card" />
                <h3 className="sp-title">NCH Infectious Disease</h3>
            </div>

            <div className="selection">
                <img src={med} alt="MP Surgery" className="sp-card" />
                <h3 className="sp-title">NCH Med-Plaza General Surgery</h3>
            </div>

            <div className="selection">
                <img src={north} alt="North Surgery" className="sp-card" />
                <h3 className="sp-title">NCH North General Surgery</h3>
            </div>

            <div className="selection">
                <img src={appt} alt="Appointment" className="sp-card" />
                <h3 className="sp-title">Appointment Confirmation Calls</h3>
            </div>

            <div className="selection">
                <img src={gt} alt="Greentree Therapy" className="sp-card" />
                <h3 className="sp-title">Greentree Therapy</h3>
            </div>

            <div className="selection">
                <img src={gyno} alt="Gynecologic Oncology" className="sp-card" />
                <h3 className="sp-title">Gynecologic Oncology</h3>
            </div>

            <div className="selection">
                <img src={vasc} alt="Vascular Surgery" className="sp-card" />
                <h3 className="sp-title">Vascular Surgery</h3>
            </div>
        </div>
    </div>
  );
}

export default Specialties;
