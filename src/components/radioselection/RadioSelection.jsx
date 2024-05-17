import './radioselection.css';
import RadioIcon from './RadioIcon.jsx'; // Make sure the path is correct

// Updated RadioSelection to handle multiple radio buttons
const RadioSelection = ({label, isRequired, queries, selectedQuery, onChange, error}) => {

  return (
    <div className="radioGroup">
      <label className="textFieldLabel body-s">{label}
        {isRequired && <span className="requiredIndicator">*</span>}
      </label>
      <div className="radio-selection">

        {queries.map(query => (
          <div key={query}
               className={`radio-item body-m-regular ${selectedQuery === query ? 'radio-checked' : 'radio-unchecked'} ${error ? 'error' : ''}`}
               onClick={() => onChange(query)}
               tabIndex="0"
               role="radio"
               aria-checked={selectedQuery === query}
               onKeyPress={(e) => (e.key === ' ' || e.key === 'Enter') && onChange(query)}
          >
          <RadioIcon isChecked={selectedQuery === query}/>
          <label>{query}</label>
          </div>
          ))}

      </div>
      {error && <p className="body-s error-message">{error}</p>}
    </div>

  );
};

export default RadioSelection;
