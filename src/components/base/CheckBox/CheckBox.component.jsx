import './CheckBox.styles.scss';

const CheckBox = ({ name, onChange, checked, error, label }) => {
  return (
    <label
      htmlFor='custom-checkBox'
      id='custom-checkBox'
      className='custom-checkBox'
    >
      <input
        type='checkbox'
        name={name}
        checked={checked}
        onChange={onChange}
        className={`custom-checkBox-input ${
          error && 'custom-checkBox-error'
        }`}
      />
      {label}
    </label>
  );
};

export default CheckBox;
