import './Button.styles.scss';

const Button = ({ type, text, variant, className, children }) => {
  return (
    <button className={`custom-btn ${variant} ${className}`} type={type}>
      {text} {children}
    </button>
  );
};

Button.defaultProps = {
  variant: 'contained',
  type: 'button',
};

export default Button;
