import { useState } from 'react';
import { findFlagUrlByIso3Code } from 'country-flags-svg';
import './PhoneNumber.styles.scss';

const PhoneNumber = () => {
  const [open, setOpen] = useState(false);

  const toggleDropDown = () => {
    setOpen((prevS) => !prevS);
  };

  const flag = findFlagUrlByIso3Code('NGA');

  return (
    <div className='custom-phone-number'>
      <div className='country-code-select'>
        <img src={flag} alt='NGA' className='country-flag-svg' />
      </div>
      
      <input type='text' value='+234' />

      {/* drop-down menu */}
      <div
        onMouseEnter={toggleDropDown}
        className={`countries-dropdown ${open && 'show-dropdown'}`}
      >
        {[0].map((item) => (
          <div key={item} className='countries-dropdown-option'>
            <img src={flag} alt='NGA' className='country-flag-svg' />
            <p className='country-name'>Nigeria</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneNumber;
