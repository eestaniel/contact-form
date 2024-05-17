import './textfield.css';

const TextField = ({ label, value, onChange, isRequired, isMessage = false, error}) => {
  const InputOrTextArea = isMessage ? 'textarea' : 'input';
  const inputId = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="textFieldGroup">
      <label htmlFor={inputId} className="textFieldLabel body-s" >
        {label}
        {isRequired && <span className="requiredIndicator">*</span>}
      </label>
      <InputOrTextArea
        id={inputId}
        className={`textField body-m-regular ${isMessage ? 'message' : ''} ${error ? 'error' : ''}`}
        type={isMessage ? undefined : 'text'} // type is undefined for textarea
        aria-required={isRequired ? 'true' : 'false'}
        value={value}
        onChange={onChange}
      />
      {error && <p className="body-s error-message">{error}</p>}
    </div>

  );
};

export default TextField;
