import './App.css';
import {useState} from 'react';
import TextField from "./components/textfield/TextField.jsx";
import RadioSelection from "./components/radioselection/RadioSelection.jsx";
import CheckBox from "./components/checkbox/CheckBox.jsx";
import Button from "./components/buttons/Button.jsx";
import Toast from "./components/toast/Toast.jsx";
import {validateForm} from "./utils/validateForm.jsx";
import {resetForm} from "./utils/resetForm.jsx";

function App() {
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


  const handleChange = (field, value) => {
    setFormData(prev => ({...prev, [field]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsValid(true);
      resetForm(setFormData, setFormErrors);
      setTimeout(() => setIsValid(false), 5000);
    }
  }

  return (
    <main>

      <div className="container">
        {isValid && <Toast/>}
        <form>
          <h1 className="heading">Contact Us</h1>
          <div className="form-group">
            <div className="name-group">
              <TextField label={'First Name'}
                         isRequired={true}
                         value={formData.firstName}
                         onChange={(e) => handleChange('firstName', e.target.value)}
                         error={formErrors.firstName}/>

              <TextField label={'Last Name'}
                         isRequired={true}
                         value={formData.lastName}
                         onChange={(e) => handleChange('lastName', e.target.value)}
                         error={formErrors.lastName}/>
            </div>

            <TextField label={'Email Address'}
                       isRequired={true}
                       value={formData.email}
                       onChange={(e) => handleChange('email', e.target.value)}
                       error={formErrors.email}/>

            <RadioSelection label={'Query Type'}
                            isRequired={true}
                            queries={['General Enquiry', 'Support Request']}
                            selectedQuery={formData.queryType}
                            onChange={(value) => handleChange('queryType', value)}
                            error={formErrors.queryType}/>

            <TextField label={'Message'}
                       isRequired={true}
                       isMessage={true}
                       value={formData.message}
                       onChange={(e) => handleChange('message', e.target.value)}
                       error={formErrors.message}/>
            <CheckBox isRequired={true}
                      isChecked={formData.consent}
                      onChange={(checked) => handleChange('consent', checked)}
                      error={formErrors.consent}/>

            <Button
              label={'Submit'}
              onClick={(e) => handleSubmit(e)}/>

          </div>
        </form>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by <a href="https://github.com/EEstaniel?tab=repositories">eestaniel</a>.
      </div>
    </main>
  )
}

export default App
