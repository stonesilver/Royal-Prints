import { useState, useRef } from 'react';
import { findFlagUrlByIso3Code } from 'country-flags-svg';
import './PhoneNumber.styles.scss';

const PhoneNumber = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const toggleDropDown = () => {
    setOpen(true);
    ref.current.focus();
  };

  const flag = findFlagUrlByIso3Code('NGA');

  return (
    <div className='custom-phone-number'>
      <div className='country-code-select' onClick={toggleDropDown}>
        <img src={flag} alt='NGA' className='country-flag-svg' />
      </div>

      <input type='text' value='+234' onChange={() => {}} />

      {/* drop-down menu */}
      <div
        className={`countries-dropdown ${open && 'show-dropdown'}`}
        ref={ref}
        onBlur={() => setOpen(false)}
        tabIndex={0}
      >
        {[0].map((item) => (
          <div key={item} className='countries-dropdown-option'>
            <img src={flag} alt='NGA' className='country-flag-svg' />
            <p className='country-name'>
              Nigeria <span className='country-code'>+234</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneNumber;
