import './Home.css'
import spec from './assets/Landing-Images/SP-Home.jpg';
import primary from './assets/Landing-Images/PC-Home.jpg';
import survey from './assets/Landing-Images/survey.jpg';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <div className="instr-text">
            <h2 className="instr">Make a selection based on the caller's needs</h2>
        </div>
        <div className="container">
            <div className="selection">
                <Link to='/specialties'>
                <img src={spec} alt="Specialties" className="card" />
                <h3 className="title">NCH Specialties</h3>
                </Link>
            </div>

            <div className="selection">
                <img src={primary} alt="Primary Care" className="card" />
                <h3 className="title">NCH Primary Care</h3>
            </div>

            <div className="selection">
                <img src={survey} alt="Survey" className="card" />
                <h3 className="title">Hospital Discharge Survey</h3>
            </div>
        </div>
        </>
    )
}

export default Home