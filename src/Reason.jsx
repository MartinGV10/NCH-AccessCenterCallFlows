import './Reason.css'
import Help from './Help'
import { useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'

function Reason() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const dialogRef = useRef(null);

    const handleAppointmentClick = () => {
        setOpen(true);
    };

    const handleDialogButtonClick = () => {
        setOpen(false);
        navigate('./insurance');
    };

    return (
        <>
        {open && <div className="dialog-overlay"></div>}
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

                <div className="re-selection third" onClick={handleAppointmentClick} style={{cursor: 'pointer'}}>
                    <h3 className="re-title">Appointment</h3>
                    <p className="info" >Click to continue appointment process</p>
                </div>

                {open && (
                <dialog open ref={dialogRef} style={{zIndex: 1001}}>
                    <div className="d-box">
                        <div className="d-text">
                            <h2 className="instr question">Have you verified the patient's insurance?</h2>
                            <h3 className="re-title">You must check this before you continue</h3>
                        </div>
                        <button className="next" onClick={handleDialogButtonClick}>Yes</button>
                    </div>
                </dialog>
                )}

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