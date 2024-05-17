import './App.css'
import TextField from "./components/textfield/TextField.jsx";
import RadioSelection from "./components/radioselection/RadioSelection.jsx";
import CheckBox from "./components/checkbox/CheckBox.jsx";
import Button from "./components/buttons/Button.jsx";

function App() {

  return (
    <main>
      <div className="container">
        <form>
          <h1 className="heading">Contact Us</h1>
          <div className="form-group">
            <div className="name-group">
              <TextField label={'First Name'} isRequired={true}/>
              <TextField label={'Last Name'} isRequired={true}/>
            </div>

            <TextField label={'Email Address'} isRequired={true}/>
            <RadioSelection label={'Query Type'} isRequired={true} queries={['General Enquiry', 'Support Request']}/>
            <TextField label={'Message'} isRequired={true} isMessage={true}/>
            <CheckBox isRequired={true}/>
            <Button label={'Submit'}/>
          </div>
        </form>
      </div>
    </main>
  )
}

export default App
