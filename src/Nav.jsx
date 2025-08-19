import './Nav.css'
import logo from './assets/nch2.webp'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
        <div className="nav">
            <div className="left">
                <Link to="/">
                <img src={logo} alt="NCH logo" />
                </Link>
                <h1 className="title">Access Center Call Flows</h1>
            </div>

            <div className="mid">
                <ul>
                    {/* Use link to route to other pages */}
                    <li><Link to='/specialties'>NCH Specialties</Link></li> 
                    <li>NCH Primary Care</li>
                    <li>Hospital Discharge Survey</li>
                </ul>
                <button className="report">Report an Issue</button>
            </div>

        </div>
        </>
    )
}

export default Nav