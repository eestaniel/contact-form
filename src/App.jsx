import './App.css';
import {useState} from 'react';
import TextField from "./components/textfield/TextField.jsx";
import RadioSelection from "./components/radioselection/RadioSelection.jsx";
import CheckBox from "./components/checkbox/CheckBox.jsx";
import Button from "./components/buttons/Button.jsx";
import Toast from "./components/toast/Toast.jsx";

function App() {
  /*hashmap for states for firstname, lastname, email, query type, message, checkbox, */
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: ''
  });

  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "This field is required";
    if (!formData.lastName) errors.lastName = "This field is required";
    if (!formData.email) {
      errors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.queryType) errors.queryType = "Please select a query type";
    if (!formData.message) errors.message = "This field is required";
    if (!formData.consent) errors.consent = "To submit this form, please consent to being contacted";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsValid(true);
      resetForm();
      setTimeout(() => {
        setIsValid(false);
      }, 5000);
    }
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      queryType: '',
      message: '',
      consent: false
    });
    setFormErrors({
      firstName: '',
      lastName: '',
      email: '',
      queryType: '',
      message: '',
      consent: ''
    });
  }

  return (
    <main>

      <div className="container">
        {isValid && <Toast/>}
        <form>
          <h1 className="heading">Contact Us</h1>
          <div className="form-group">
            <div className="name-group">
              <TextField label={'First Name'} isRequired={true} value={formData.firstName}
                         onChange={(e) => handleChange('firstName', e.target.value)} error={formErrors.firstName}/>
              <TextField label={'Last Name'} isRequired={true} value={formData.lastName}
                         onChange={(e) => handleChange('lastName', e.target.value)} error={formErrors.lastName}/>
            </div>

            <TextField label={'Email Address'} isRequired={true} value={formData.email}
                       onChange={(e) => handleChange('email', e.target.value)} error={formErrors.email}/>
            <RadioSelection label={'Query Type'} isRequired={true} queries={['General Enquiry', 'Support Request']}
                            selectedQuery={formData.queryType}
                            onChange={(value) => handleChange('queryType', value)} error={formErrors.queryType}/>
            <TextField label={'Message'} isRequired={true} isMessage={true} value={formData.message}
                       onChange={(e) => handleChange('message', e.target.value)} error={formErrors.message}/>
            <CheckBox isRequired={true} isChecked={formData.consent}
                      onChange={(checked) => handleChange('consent', checked)} error={formErrors.consent}/>
            <Button label={'Submit'} onClick={(e) => handleSubmit(e)}/>
          </div>
        </form>
      </div>
    </main>
  )
}

export default App
