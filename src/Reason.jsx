import './Reason.css'
import Help from './Help'
import { Link } from 'react-router-dom'

function Reason() {
    return (
        <>
        <div className="holder big-cont">
        <div className="main-wdw">
            <div className="instr-text relst">
                <h2 className="instr question">What is the patient calling for?</h2>
            </div>
            {/* re = reason*/}
            <div className="re-cont">
                <div className="re-selection">
                    <h3 className="re-title">Billing Questions</h3>
                    <p className="info">Provide number to NCH billing department at (239) 624-6400</p>
                </div>

                <div className="re-selection">
                    <h3 className="re-title">Medical Records</h3>
                    <p className="info">Provide number to NCH medical department at (239) 624-6567</p>
                </div>

                <Link to={'./insurance'}>
                <div className="re-selection third">
                    <h3 className="re-title">Appointment</h3>
                    <p className="info">Click to continue appointment process</p>
                </div>
                </Link>

            </div>
        </div>
        </div>
        <div className="help">
            <Help/>
        </div>
        </>
    )
}

export default Reason