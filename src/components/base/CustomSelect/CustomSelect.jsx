import { useState } from 'react';
import { ReactComponent as CaretDown } from '../../../assets/svg/caret-down.svg';
import './CustomSelect.styles.scss';

const CustomSelect = ({ options, value, label, setState }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prevS) => !prevS);
  };

  const handleChange = (value) => {
    setState((prevS) => ({
      ...prevS,
      birthday: { ...prevS.birthday, [label]: value },
    }));
  };

  return (
    <div className='custom-select' onClick={toggleDropdown}>
      <p aria-label='select' className='custom-select-selected'>
        {value || label}
      </p>
      <CaretDown className='custom-select-caret' />
      {open && (
        <ul className='custom-select-dropdown'>
          {options.map((option) => (
            <li
              key={option}
              className='custom-select-dropdown-option'
              onClick={() => handleChange(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
