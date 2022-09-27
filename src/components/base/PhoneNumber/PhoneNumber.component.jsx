import { useState, useRef } from 'react';
import phoneCode from '../../../assets/countryDailingCode.json';
import { flagSvg } from '../../../utils/flagSvg';
import './PhoneNumber.styles.scss';

const PhoneNumber = ({ value, setState, handleChange, Iso2Code }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  const toggleDropDown = () => {
    setOpen(true);
    ref.current.focus();
  };

  const setCountryCode = (phoneCode, Iso2Code) => {
    setState((prevS) => ({ ...prevS, phone: `+${phoneCode}`, Iso2Code }));
    setOpen(false);
  };

  const sortedPhoneCode = phoneCode.sort((a, b) => a.country_en - b.country_en);

  return (
    <div className='custom-phone-number'>
      <div className='country-code-select' onClick={toggleDropDown}>
        <img
          src={flagSvg(Iso2Code)}
          alt={Iso2Code}
          className='country-flag-svg'
        />
      </div>

      <input
        type='tel'
        name='phone'
        value={value}
        onChange={(event) => {
          !event.target.value.match(/[a-z]/gi) && handleChange(event);
        }}
      />

      {/* drop-down menu */}
      <div
        className={`countries-dropdown ${open && 'show-dropdown'}`}
        ref={ref}
        onBlur={() => setOpen(false)}
        tabIndex={0}
      >
        {sortedPhoneCode.map(({ country_code, country_en, phone_code }) => (
          <div
            key={country_en}
            className='countries-dropdown-option'
            onClick={() => setCountryCode(phone_code, country_code)}
          >
            <img
              src={flagSvg(country_code)}
              alt={country_en}
              className='country-flag-svg'
            />
            <p className='country-name'>
              {country_en} <span className='country-code'>+{phone_code}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneNumber;
