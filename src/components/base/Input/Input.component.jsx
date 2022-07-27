import './Input.styles.scss';

const Input = ({ type, label, props }) => {
  return (
    <>
      <label htmlFor={type} className='input-label'>
        {label}
        <input
          type={type}
          name={type}
          {...props}
          required
          className='user-input'
        />
      </label>
    </>
  );
};

export default Input;
