import { findFlagUrlByIso3Code } from 'country-flags-svg';
import './PhoneNumber.styles.scss';

const PhoneNumber = () => {
  const flag = findFlagUrlByIso3Code('NGA');
  return (
    <div className='custom-phone-number'>
      <div className='country-code-select'>
        <img src={flag} alt='NGA' className='country-flag-svg' />
      </div>
      <input type='text' value='+234' />
      <div className="countries-dropdown">
        
      </div>
    </div>
  );
};

export default PhoneNumber;