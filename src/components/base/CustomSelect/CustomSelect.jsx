import { useState } from 'react';
import './CustomSelect.styles.scss';

const CustomSelect = ({ options, value, label }) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prevS) => !prevS);
  };
  
  return (
    <div className='custom-select' onClick={toggleDropdown}>
      <p aria-label='select' className='custom-select-selected'>
        {value || label}
      </p>
      {open && (
        <ul className='custom-select-dropdown'>
          <li className='custom-select-dropdown-option'>January</li>
          <li className='custom-select-dropdown-option'>February</li>
          <li className='custom-select-dropdown-option'>March</li>
          <li className='custom-select-dropdown-option'>April</li>
          <li className='custom-select-dropdown-option'>May</li>
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
