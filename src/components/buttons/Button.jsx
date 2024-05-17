import './button.css';

const Button = ({label}) => {
  return (
    <div className="button body-m-bold">
      {label}
    </div>
  );
};

export default Button;
