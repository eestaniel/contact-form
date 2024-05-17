import './checkbox.css'
import checkBox from '../../assets/svgs/checkbox.svg'
import checkBoxChecked from '../../assets/svgs/checkbox_check.svg'

const CheckBox = ({isRequired, isChecked, onChange, error}) => {

  return (
    <>
      <div className="checkboxGroup" onClick={() => onChange(!isChecked)}>
        <div className="checkbox">
          <img src={isChecked ? checkBoxChecked : checkBox} alt="checkbox"/>
        </div>
        <label className="checkBoxLabel body-s" htmlFor="consent">
          <p>I consent to being contacted by the team {isRequired && <span className="requiredIndicator">*</span>}</p>
        </label>
        {error && <p className="body-s error-message">{error}</p>}
      </div>

    </>
  );
};

export default CheckBox;
