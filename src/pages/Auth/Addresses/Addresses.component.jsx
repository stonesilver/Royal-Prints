import { useState } from 'react';
import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import Input from '../../../components/base/Input/Input.component';
import './Addresses.styles.scss';

const Addresses = () => {
  const [formData, setFormData] = useState({
    addressName: '',
    firstName: '',
    lastName: '',
    addressLineOne: '',
    addressLineTwo: '',
    zip: '',
    city: '',
    country: '',
    deliveryPhoneNumber: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <UserAccountItemCard title='Addresses / New Address'>
      <form onSubmit={handleSubmit} className='user-addresses'>
        <div className='user-addresses-row'>
          <p className='user-addresses-row-title user-addresses-row-important'>
            ADDRESS NAME (E.G. HOME)
          </p>
          <div className='user-addresses-row-inputs'>
            <Input
              type='text'
              name='addressName'
              value={formData.addressName}
              handleChange={handleChange}
            />
          </div>
        </div>
      </form>
    </UserAccountItemCard>
  );
};

export default Addresses;
