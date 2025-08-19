import { useState, useEffect } from 'react';
import './Checklist.css';
import Help from './Help';
import { Link } from 'react-router-dom';

function Checklist() {
  // State to track the color (true = red, false = green) for each button
  const [colorName, setColorName] = useState(true);
  const [colorDob, setColorDob] = useState(true);
  const [colorAddress, setColorAddress] = useState(true);
  const [colorPhone, setColorPhone] = useState(true);

  // State to manage the visibility of the Next button
  const [active, setActive] = useState(false);

  // Toggle functions for each button
  const toggleNameColor = () => setColorName(prev => !prev);
  const toggleDobColor = () => setColorDob(prev => !prev);
  const toggleAddressColor = () => setColorAddress(prev => !prev);
  const togglePhoneColor = () => setColorPhone(prev => !prev);

  // Check if all buttons are green (false)
  const checkAllButtonsGreen = () => {
    if (
      colorAddress === false && colorPhone === false && colorDob === false && colorName === false) {
      setActive(true);  // Show the Next button when all buttons are green
    } 
    
    else {
      setActive(false);  // Hide the Next button if any button is not green
    }
  };

  // Run this function whenever any of the color states change
  useEffect(() => {
    checkAllButtonsGreen();  // Check if all buttons are green
  }, [colorName, colorDob, colorAddress, colorPhone]);  // Trigger check when any of these states change

  return (
    <>
      <div className="big-cont">
  
        <div className="instr-text chlst">
          <h2 className="instr">Click each box when you have the following patient information</h2>
          <h3 className='instr'>Only continue when all boxes are checked</h3>
        </div>
        <div className="ch-cont">
          <div className="inputs">
            <button
              className="pt-info"
              onClick={toggleNameColor}
              style={{
                borderColor: colorName ? '#c92d2e' : '#366532',  // Red if true, green if false
                color: '#3c1053'
              }}
            >Name
            </button>
            <button
              className="pt-info"
              onClick={toggleDobColor}
              style={{
                borderColor: colorDob ? '#c92d2e' : '#366532',  // Red if true, green if false
                color: '#3c1053'
              }}
            >Date of Birth
            </button>
            <button
              className="pt-info"
              onClick={toggleAddressColor}
              style={{
                borderColor: colorAddress ? '#c92d2e' : '#366532',  // Red if true, green if false
                color: '#3c1053'
              }}
            >Address
            </button>
            <button
              className="pt-info"
              onClick={togglePhoneColor}
              style={{
                borderColor: colorPhone ? '#c92d2e' : '#366532',  // Red if true, green if false
                color: '#3c1053'
              }}
            >Phone Number
            </button>
          </div>

          {/* The Next button is only wrapped in Link if active is true */}
          {active ? (
            <Link to={'./reason'}>
              <button
                className="next"
                style={{ cursor: 'pointer', opacity: 1 }}
              >Next
              </button>
            </Link>
          ) : (
            <button
              className="next"
              disabled
              style={{ cursor: 'not-allowed', opacity: 0.5 }}
            >Next
            </button>
          )}
        </div>
      </div>

      <Help/>
    </>
  );
}

export default Checklist;
