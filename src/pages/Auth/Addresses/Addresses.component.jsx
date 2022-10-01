import { useState } from 'react';
import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import FormItem from '../../../components/FormItem';
import CustomSelect from '../../../components/base/CustomSelect/CustomSelect';
import CountriesJson from '../../../assets/countries.json';
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

  const handleCountryChange = (label, option) => {
    setFormData((prevS) => ({ ...prevS, [label]: option }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <UserAccountItemCard title='Addresses / New Address'>
      <form onSubmit={handleSubmit} className='user-addresses'>
        <FormItem
          options={[
            {
              label: 'ADDRESS NAME (E.G. HOME)',
              type: 'text',
              name: 'addressName',
              value: formData.addressName,
              handleChange: handleChange,
            },
          ]}
        />
        <FormItem
          options={[
            {
              label: 'First Name',
              type: 'text',
              name: 'firstName',
              value: formData.firstName,
              handleChange: handleChange,
              importatnt: true,
            },
            {
              label: 'Last Name',
              type: 'text',
              name: 'lastName',
              value: formData.lastNames,
              handleChange: handleChange,
              importatnt: true,
            },
          ]}
        />
        <FormItem
          options={[
            {
              label: 'Address Line 1',
              type: 'text',
              name: 'addressLineOne',
              value: formData.addressLineOne,
              handleChange: handleChange,
              importatnt: true,
            },
          ]}
        />
        <FormItem
          options={[
            {
              label: 'Address Line 2',
              type: 'text',
              name: 'addressLineTwo',
              value: formData.addressLineTwo,
              handleChange: handleChange,
            },
          ]}
        />
        <FormItem
          options={[
            {
              label: 'ZIP',
              type: 'number',
              name: 'zip',
              value: formData.zip,
              handleChange: handleChange,
            },
            {
              label: 'City',
              type: 'text',
              name: 'city',
              value: formData.city,
              handleChange: handleChange,
            },
          ]}
        >
          <div className='user-addresses-row-column'>
            <p className='user-addresses-row-column-title user-addresses-row-column-important'>
              Country
            </p>

            <CustomSelect
              options={CountriesJson}
              value={formData.country}
              label=''
              handleChange={handleCountryChange}
            />
          </div>
        </FormItem>
      </form>
    </UserAccountItemCard>
  );
};

export default Addresses;
