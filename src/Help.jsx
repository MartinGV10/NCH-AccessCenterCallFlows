import './Help.css'
import { useNavigate } from 'react-router-dom'

function Help() {
    const navigate = useNavigate() //initializes navigate function

    const handleBack = () => {
        navigate(-1) //takes user to previous page
    }

    const handleNAP = () => {
        // window.open('/NAP.htm', '_blank');  // Correct way to open in a new tab
        alert('This is hospital system information only and cannot be viewed by the public')
    };

    const handleGuidelines = () => {
        // window.open('/PTGuidelines.htm', '_blank');  // Correct way to open in a new tab
        alert('This is hospital system information only and cannot be viewed by the public')
    };


    return (
        <>
            <div className="instr-text additional">
                <h2 className='instr' style={{textDecoration: 'underline'}}>Other links</h2>
            </div>
            <div className="help-cont">
                <div className="bottom">
                    <button className="not-patient" onClick={handleNAP}>Not a patient</button>
                    <button className="guidelines" onClick={handleGuidelines}>Guidelines</button>
                    <button className="prev" onClick={handleBack}>Previous Step</button>
                </div>
            </div>
        </>
    )
}

export default Help