import { useState } from 'react';
import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './ShippingAddress.styles.scss';

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

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <UserAccountItemCard title='Shipping Address'>
      <form onSubmit={handleSubmit} className='checkout-shipping-address'>
        <div className='checkout-shipping-address-contact'></div>
        <div className='checkout-shipping-address-address'></div>
      </form>
    </UserAccountItemCard>
  );
};

export default ShippingAddress;
