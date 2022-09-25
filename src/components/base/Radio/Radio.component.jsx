import './Radio.component.scss';

const Radio = ({ name, checked, onChange, label }) => {
  return (
    <label className='custom-radio'>
      {label}
      <input
        type='radio'
        checked={checked}
        className='custom-radio-input'
        name={name}
        value={label}
        onChange={onChange}
      />
      <span className='checkmark'></span>
    </label>
  );
};

export default Radio;
