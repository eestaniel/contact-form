
const RadioIcon = ({ isChecked }) => {
  return (
    <div className="radio-icon">
      {isChecked ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
          <path fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m56-88a56 56 0 1 1-56-56a56.06 56.06 0 0 1 56 56"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256">
          <path fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88"></path>
        </svg>
      )}
    </div>
  );
};

export default RadioIcon;
