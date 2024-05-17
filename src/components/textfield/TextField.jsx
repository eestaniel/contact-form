import './textfield.css';

const TextField = ({ label, isRequired, isMessage = false }) => {
  // Conditionally render a textarea or input based on isMessage
  const InputOrTextArea = isMessage ? 'textarea' : 'input';

  return (
    <div className="textFieldGroup">
      <label className="textFieldLabel body-s">
        {label}
        {isRequired && <span className="requiredIndicator">*</span>}
      </label>
      <InputOrTextArea
        className={`textField body-m-regular ${isMessage ? 'message' : ''}`}
        type={isMessage ? undefined : 'text'} // type is undefined for textarea
        aria-required={isRequired ? 'true' : 'false'}
      />
    </div>
  );
};

export default TextField;
