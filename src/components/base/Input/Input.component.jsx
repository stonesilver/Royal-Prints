import './Input.styles.scss';

const Input = ({
  type,
  label,
  props,
  value,
  placeHolder,
  handleChange,
  error,
}) => {
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
          className={`user-input ${Boolean(error) && 'border-error'}`}
        />
      </label>
      {Boolean(error) && <span className='user-input-error'>{error}</span>}
    </>
  );
};

export default Input;
