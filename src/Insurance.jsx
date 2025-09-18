// Page will hide the previously answered question

import { useState } from 'react';
import './Insurance.css';
import Help from './Help';

function Insurance() {
  // State to track which section to display
  const [hasHMO, setHasHMO] = useState(null);  // null = no selection, true = Yes, false = No
  const [isReferred, setIsReferred] = useState(null); // Used for further branching
  const [pcpSame, setPCPSame] = useState(null)
  const [hasProvider, setHasProvider] = useState(null)

  const handleHMOSelection = (selection) => { //function to grab yes/no selection
    setHasHMO(selection); // Gets the selected option
    setIsReferred(null); // Reset referral section
    setPCPSame(null) // Reset PCP section
  };

  const handleReferralSelection = (selection) => {
    setIsReferred(selection);
    setPCPSame(null)
  };

  const handlePCPselection = (selection) => {
    setPCPSame(selection)
  }

  const handleProviderSelection = (selection) => {
    setHasProvider(selection)
  }



  return (
    <>
    <div className="big-cont">
      <div className="main-wdw">
        {/* Initial Yes/No question - only show if hasHMO is null */}
        {hasHMO === null && (
          <>
            <div className="instr-text relst">
              <h2 className="instr question">Does the patient have HMO insurance?</h2>
            </div>
            <div className="re-cont">
              <button className="ins-btn" onClick={() => {handleHMOSelection(true);}}>Yes</button>
              <button className="ins-btn" onClick={() => {handleHMOSelection(false);}}>No</button>
            </div>
          </>
        )}

        {/* Section for "Yes" selection (HMO insurance is present) */}
        {hasHMO === true && (
          <>
            {/* Referral question only if isReferred is null */}
            {isReferred === null && (
              <>
                <div className="instr-text relst">
                  <h2 className='instr question'>Does the patient have an active referral?</h2>
                </div>
                <div className="re-cont">
                  <button className="ins-btn" onClick={() => handleReferralSelection(true)} >Yes</button>
                  <div className='re-selection'>
                    <h3 className="re-title">No</h3>
                    <p className="info">Patient needs to call their PCP who is listed on their insurance and request a referral</p>
                  </div>
                </div>
                <div className="btn">
                  <button className="back-btn" onClick={() => setHasHMO(null)}>Back</button>
                </div>
              </>
            )}

            {/* Show further options based on referral selection */}
            {isReferred === true && (
              <>
                {/* PCP question only if pcpSame is null */}
                {pcpSame === null && (
                  <>
                    <div className="instr-text relst">
                      <h2 className='instr question'>Is the PCP on the referral the same one listed as the PCP according to RTE</h2>
                    </div>
                    <div className='re-cont'>
                      <button className="ins-btn" onClick={() => handlePCPselection(true)}>Yes</button>
                      <div className="re-selection pcp-two">
                        <h3 className="re-title">No</h3>
                        <p className="info">Patient needs to call their listed PCP and request a referral. The RTE PCP and PCP on the referral need to match.</p>
                        <p className='info'>Exception: If referral came back from Nurse Practitioner or PA who works under the listed physician</p>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="back-btn" onClick={() => setIsReferred(null)}>Back</button>
                    </div>
                  </>
                )}

                {/* Section for pcp yes */}
                {pcpSame === true && (
                  <>
                    <div className="instr-text relst">
                      <h2 className="instr question">Good to schedule with provider as per appointment guidelines</h2>
                    </div>
                    <div className="re-cont"> 
                      <div className="re-selection sch-div">
                        <h3 className="re-title">New Patient</h3>
                        {/* <p className="info">Schedule with Dr. Smith or Dr. Gilson (first available)</p> */}
                        <p className="info">Schedule with first available doctor</p>
                        <p>60 min appt</p>
                      </div>
                      <div className="re-selection sch-div">
                        <h3 className="re-title">Follow-up (Established patients only)</h3>
                        <p className="info">Schedule with previously seen physician - 30 min appt</p>
                        <p>If no available appt with that phyisican, it's ok to schedule with another phyisican</p>
                        <p>If appt is for hospital follow up, leave it in appt notes</p>
                      </div>
                      <div className="re-selection sch-div">
                        <h3 className="re-title">Virtual Visit</h3>
                        <p className="info">Do not schedule if patient requests this.</p>
                        <p>Attempt warm transfer to office.</p>
                        <p>If no answer, send HP message to the Admin Pool</p>
                      </div>
                    </div>
                    <div className="btn">
                      <button className="back-btn" onClick={() => setPCPSame(null)}>Back</button>
                    </div>
                  </>
                )}
              </>
            )}
          </>
        )}

        {/* Section for "No" selection (HMO insurance is not present) */}
        {hasHMO === false && (
          <>
            {/* Provider question only if hasProvider is null */}
            {hasProvider === null && (
              <>
                <div className="instr-text relst">
                  <h2 className="instr question">Does the patient have a referral for a specific provider?</h2>
                </div>
                <div className='re-cont'>
                  <button className="ins-btn" onClick={() => handleProviderSelection(true)}>Yes</button> 
                  <button className="ins-btn" onClick={() => handleProviderSelection(false)}>No</button>
                </div>
                <div className="btn">
                  <button className="back-btn" onClick={() => setHasHMO(null)}>Back</button>
                </div>
              </>
            )}

            {/* Section for provider yes */}
            {hasProvider === true && (
              <>
                <div className="instr-text relst">
                  <h2 className="instr question">Good to schedule with provider as per appointment guidelines</h2>
                </div>
                <div className="re-cont"> 
                  <div className="re-selection sch-div">
                    <h3 className="re-title">New Patient</h3>
                    {/* <p className="info">Schedule with Dr. Smith or Dr. Gilson (first available)</p> */}
                    <p className="info">Schedule with first available doctor</p>
                    <p>60 min appt</p>
                  </div>
                  <div className="re-selection sch-div">
                    <h3 className="re-title">Follow-up (Established patients only)</h3>
                    <p className="info">Schedule with previously seen physician - 30 min appt</p>
                    <p>If no available appt with that phyisican, it's ok to schedule with another phyisican</p>
                    <p>If appt is for hospital follow up, leave it in appt notes</p>
                  </div>
                  <div className="re-selection sch-div">
                    <h3 className="re-title">Virtual Visit</h3>
                    <p className="info">Do not schedule if patient requests this.</p>
                    <p>Attempt warm transfer to office.</p>
                    <p>If no answer, send HP message to the Admin Pool</p>
                  </div>
                </div>
                <div className="btn">
                  <button className="back-btn" onClick={() => setHasProvider(null)}>Back</button>
                </div>
              </>
            )}

            {/* Section for provider no */}
            {hasProvider === false && (
              <>
                <div className="instr-text relst">
                  <h2 className="instr question">Good to schedule with first avaiable provider as per appointment guidelines</h2>
                </div>
                <div className="re-cont"> 
                  <div className="re-selection sch-div">
                    <h3 className="re-title">New Patient</h3>
                    {/* <p className="info">Schedule with Dr. Smith or Dr. Gilson (first available)</p> */}
                    <p className="info">Schedule with first available doctor</p>
                    <p>60 min appt</p>
                  </div>
                  <div className="re-selection sch-div">
                    <h3 className="re-title">Follow-up (Established patients only)</h3>
                    <p className="info">Schedule with previously seen physician - 30 min appt</p>
                    <p>If no available appt with that phyisican, it's ok to schedule with another phyisican</p>
                    <p>If appt is for hospital follow up, leave it in appt notes</p>
                  </div>
                  <div className="re-selection sch-div">
                    <h3 className="re-title">Virtual Visit</h3>
                    <p className="info">Do not schedule if patient requests this.</p>
                    <p>Attempt warm transfer to office.</p>
                    <p>If no answer, send HP message to the Admin Pool</p>
                  </div>
                </div>
                <div className="btn">
                  <button className="back-btn" onClick={() => setHasProvider(null)}>Back</button>
                </div>
              </>
            )}
          </>
        )}
        </div>
      </div>

      
      <div className="help">
        <Help />
      </div>
    </>
  );
}

export default Insurance;
