import { useState } from 'react';
import CustomSelect from '../../../components/base/CustomSelect/CustomSelect';
import Input from '../../../components/base/Input/Input.component';
import Radio from '../../../components/base/Radio/Radio.component';
import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './ShippingAddress.styles.scss';

const titleArray = ['Miss', 'Mrs', 'Mr'];

const ShippingAddress = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    birthday: { Day: '', Month: '', Year: '' },
    phone: '',
    addressLineOne: '',
    addressLineTwo: '',
    zip: '',
    city: '',
    country: 'Nigeria',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  const selectHandleChange = (label, option) => {
    setFormData((prevS) => ({
      ...prevS,
      birthday: { ...prevS.birthday, [label]: option },
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
                options={[]}
                value={formData.birthday.Day}
                label='Day'
                handleChange={selectHandleChange}
              />
              <CustomSelect
                options={[]}
                value={formData.birthday.Month}
                label='Month'
                handleChange={selectHandleChange}
              />
              <CustomSelect
                options={[]}
                value={formData.birthday.Year}
                label='Year'
                handleChange={selectHandleChange}
              />
            </div>
          </div>
        </div>
        <div className='checkout-shipping-address-column'>
          <p className='checkout-shipping-address-column-heading'>ADDRESS :</p>
        </div>
      </form>
    </UserAccountItemCard>
  );
};

export default ShippingAddress;
