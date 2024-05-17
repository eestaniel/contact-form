import './button.css';

const Button = ({label, onClick}) => {
  return (
    <div className="button body-m-bold" onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;
