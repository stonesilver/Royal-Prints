import './Button.styles.scss';

const Button = ({ type, text, variant, className }) => {
  return (
    <button className={`custom-btn ${variant} ${className}`} type={type}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  variant: 'contained',
  type: 'button',
};

export default Button;
