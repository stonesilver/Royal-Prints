import { useState } from 'react';
import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './BillingAddress.styles.scss';

const BillingAddress = () => {
  const [sameInfo, setSameInfo] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    birthday: { Day: '', Month: '', Year: '' },
    phone: '+234',
    addressLineOne: '',
    addressLineTwo: '',
    zip: '',
    city: '',
    country: 'Nigeria',
    Iso2Code: 'NG',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  const handleSameInfoOnChange = (event) => {
    setSameInfo(event.target.checked);
  };

  const handleBirthdayChange = (label, option) => {
    setFormData((prevS) => ({
      ...prevS,
      birthday: { ...prevS.birthday, [label]: option },
    }));
  };

  const handleCountryChange = (label, option) => {
    setFormData((prevS) => ({
      ...prevS,
      [label]: option,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <UserAccountItemCard title='Billing Address'>
      <form onSubmit={handleSubmit} className='checkout-billing-address'>
        {/* use same info checkbox */}
        <label htmlFor='sameInfo' className='checkout-billing-address-checkbox'>
          <input
            type='checkbox'
            checked={sameInfo}
            onChange={handleSameInfoOnChange}
            name='sameInfo'
            id='sameInfo'
          />
          Same as shipping address
        </label>

        {/* billing content */}
        {sameInfo && (
          <div className='checkout-billing-address-form'>
            <div className='checkout-billing-address-form-column'></div>
            <div className='checkout-billing-address-form-column'></div>
          </div>
        )}
      </form>
    </UserAccountItemCard>
  );
};

export default BillingAddress;
