import './checkbox.css';
import checkBox from '../../assets/svgs/checkbox.svg';
import checkBoxChecked from '../../assets/svgs/checkbox_check.svg';

const CheckBox = ({ isRequired, isChecked, onChange, error }) => {
  const checkboxId = 'custom-checkbox';

  return (
    <div className={`checkboxGroup ${error ? 'error' : ''}`}>
      <input
        type="checkbox"
        id={checkboxId}
        checked={isChecked}
        onChange={onChange}
        className="visually-hidden"
      />
      <label htmlFor={checkboxId} className="checkboxLabel">
        <img src={isChecked ? checkBoxChecked : checkBox} alt="checkbox" />
        I consent to being contacted by the team
        {isRequired && <span className="requiredIndicator">*</span>}
      </label>
      {error && <p className="body-s error-message">{error}</p>}
    </div>
  );
};

export default CheckBox;
