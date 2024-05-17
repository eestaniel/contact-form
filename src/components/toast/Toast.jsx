import './toast.css'
import checkMark from '../../assets/svgs/checkmark.svg'

const Toast = () => {
  return (
    <div className="toast-card">
      <div className="header-group">
        <img src={checkMark} alt=""/>
        <h2 className="body-m-bold">Message Sent!</h2>
      </div>
      <p className="toast-text body-s">Thanks for completing the form. We’ll be in touch soon!</p>
    </div>
  );
};

export default Toast;
