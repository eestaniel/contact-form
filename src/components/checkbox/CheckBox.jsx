import './checkbox.css';
import checkBox from '../../assets/svgs/checkbox.svg';
import checkBoxChecked from '../../assets/svgs/checkbox_check.svg';

const CheckBox = ({isRequired, isChecked, onChange, error}) => {
  const checkboxId = 'custom-checkbox';

  return (
    <>
      <div className={`checkboxGroup ${error ? 'wrap' : ''}`} onClick={() => onChange(!isChecked)}
           tabIndex={0}
           role="checkbox"
           aria-checked={isChecked}
           onKeyPress={(e) => (e.key === ' ' || e.key === 'Enter') && onChange(!isChecked)}
      >
        <input type="checkbox" id={checkboxId} checked={isChecked} onChange={onChange}
               className="visually-hidden" aria-hidden="true"/>
        <div className="checkbox">
          <img src={isChecked ? checkBoxChecked : checkBox} alt="checkbox"/>
        </div>
        <label className="checkBoxLabel body-s" htmlFor="checkboxId">
          I consent to being contacted by the team
          {isRequired && <span className="requiredIndicator">*</span>}
        </label>
        {error && <p className="body-s error-message">{error}</p>}
      </div>
    </>
  );
};

export default CheckBox;
