import { useState } from 'react';
import CustomSelect from '../../../components/base/CustomSelect/CustomSelect';
import Input from '../../../components/base/Input/Input.component';
import PhoneNumber from '../../../components/base/PhoneNumber/PhoneNumber.component';
import Radio from '../../../components/base/Radio/Radio.component';
import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import { days, months, year } from '../../../utils/customSelectData';
import Countries from '../../../assets/countries.json';
import './ShippingAddress.styles.scss';

const titleArray = ['Miss', 'Mrs', 'Mr'];

const ShippingAddress = () => {
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
    <UserAccountItemCard title='Shipping Address'>
      <form onSubmit={handleSubmit} className='checkout-shipping-address'>
        <div className='checkout-shipping-address-column'>
          <p className='checkout-shipping-address-column-heading'>CONTACT :</p>
          <div className='checkout-shipping-address-column-user-title'>
            {titleArray.map((item) => (
              <Radio
                key={item}
                name='title'
                checked={formData.title === item}
                onChange={handleChange}
                label={item}
              />
            ))}
          </div>

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

          <div className='checkout-shipping-address-column-birthday'>
            <p className='checkout-shipping-address-column-birthday-title'>
              Birthday
            </p>
            <div className='checkout-shipping-address-column-birthday-row'>
              <CustomSelect
                options={days()}
                value={formData.birthday.Day}
                label='Day'
                handleChange={handleBirthdayChange}
              />
              <CustomSelect
                options={months}
                value={formData.birthday.Month}
                label='Month'
                handleChange={handleBirthdayChange}
              />
              <CustomSelect
                options={year()}
                value={formData.birthday.Year}
                label='Year'
                handleChange={handleBirthdayChange}
              />
            </div>
          </div>
          <PhoneNumber
            value={formData.phone}
            setState={setFormData}
            handleChange={handleChange}
            Iso2Code={formData.Iso2Code}
          />
          <div className='For-delivery-purposes'>For delivery purposes</div>
          <button
            type='reset'
            className='checkout-shipping-address-column-reset-btn'
          >
            Reset
          </button>
        </div>
        <div className='checkout-shipping-address-column'>
          <p className='checkout-shipping-address-column-heading'>ADDRESS :</p>
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
      </form>
    </UserAccountItemCard>
  );
};

export default ShippingAddress;
