import './button.css';

const Button = ({label, onClick}) => {

  return (
    <button className="button body-m-bold" onClick={onClick} type="button">
      {label}
    </button>
  );
};

export default Button;
