import { useState } from 'react';
import './checkbox.css'
import checkBox from '../../assets/svgs/checkbox.svg'
import checkBoxChecked from '../../assets/svgs/checkbox_check.svg'

const CheckBox = ({isRequired}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  }
  return (
    <>
      <div className="checkboxGroup">
        <div className="checkbox">
          <img src={isChecked ? checkBoxChecked : checkBox} alt="checkbox" onClick={handleCheck} />
        </div>
        <label className="checkBoxLabel body-s" htmlFor="consent">
          <p>I consent to being contacted by the team {isRequired && <span className="requiredIndicator">*</span>}</p>
        </label>
      </div>
    </>
  );
};

export default CheckBox;
