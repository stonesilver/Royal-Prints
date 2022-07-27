import './Input.styles.scss';

const Input = ({ type, label, props, value, placeHolder, handleChange }) => {
  return (
    <>
      <label htmlFor={type} className='input-label'>
        {label}
        <input
          type={type}
          name={type}
          value={value}
          placeholder={placeHolder}
          onChange={handleChange}
          {...props}
          required
          className='user-input'
        />
      </label>
    </>
  );
};

export default Input;
