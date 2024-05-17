import {useState} from 'react';
import './radioselection.css';
import RadioIcon from './RadioIcon.jsx'; // Make sure the path is correct

// Updated RadioSelection to handle multiple radio buttons
const RadioSelection = ({label, isRequired, queries}) => {
  const [selectedQuery, setSelectedQuery] = useState('');

  const handleChange = (query) => {
    setSelectedQuery(query);
  };

  return (
    <div className="radioGroup">
      <label className="textFieldLabel body-s">{label}
        {isRequired && <span className="requiredIndicator">*</span>}
      </label>
      <div className="radio-selection">

        {queries.map(query => (
          <div key={query} className={`radio-item ${selectedQuery === query ? 'radio-checked' : 'radio-unchecked'}`}
               onClick={() => handleChange(query)}>
            <RadioIcon isChecked={selectedQuery === query}/>
            <label>{query}</label>
          </div>
        ))}
      </div>
    </div>

  );
};

export default RadioSelection;
