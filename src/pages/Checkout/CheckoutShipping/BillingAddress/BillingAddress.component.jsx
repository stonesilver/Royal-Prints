import { useState } from 'react';
import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import CustomSelect from '../../../../components/base/CustomSelect/CustomSelect';
import Input from '../../../../components/base/Input/Input.component';
import PhoneNumber from '../../../../components/base/PhoneNumber/PhoneNumber.component';
import Countries from '../../../../assets/countries.json';
import { ReactComponent as ChevronIcon } from '../../../../assets/chevron-right.svg';
import './BillingAddress.styles.scss';
import Button from '../../../../components/base/Button/Button.component';

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
            <div className='checkout-billing-address-form-column'>
              <p className='checkout-billing-address-form-column-title'>
                CONTACT :
              </p>

              <Input
                value={formData.firstName}
                placeHolder='First Name'
                handleChange={handleChange}
                name='firstName'
              />

              <Input
                value={formData.lastName}
                placeHolder='Last Name'
                handleChange={handleChange}
                name='lastName'
              />

              <PhoneNumber
                value={formData.phone}
                setState={setFormData}
                handleChange={handleChange}
                Iso2Code={formData.Iso2Code}
              />

              <button
                type='reset'
                className='checkout-billing-address-form-column-reset-btn'
              >
                Reset
              </button>
            </div>

            <div className='checkout-billing-address-form-column'>
              <p className='checkout-billing-address-form-column-title'>
                ADDRESS :
              </p>

              <Input
                value={formData.addressLineOne}
                placeHolder='Address Line 1'
                handleChange={handleChange}
                name='addressLineOne'
              />
              <Input
                value={formData.addressLineTwo}
                placeHolder='Address Line 2'
                handleChange={handleChange}
                name='addressLineTwo'
              />
              <Input
                value={formData.zip}
                placeHolder='ZIP'
                handleChange={handleChange}
                name='zip'
              />
              <Input
                value={formData.city}
                placeHolder='City'
                handleChange={handleChange}
                name='city'
              />
              <CustomSelect
                options={Countries}
                value={formData.country}
                label='country'
                handleChange={handleCountryChange}
              />
            </div>
          </div>
        )}

        <Button
          type='submit'
          text='Next Step'
          className='checkout-billing-address-proceed-btn'
        >
          <ChevronIcon className='checkout-billing-address-proceed-btn-caret-icon' />
        </Button>
      </form>
    </UserAccountItemCard>
  );
};

export default BillingAddress;
