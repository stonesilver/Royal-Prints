import { useState } from 'react';
import Radio from '../../../../components/base/Radio/Radio.component';
import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './ProfileDetails.styles.scss';

const ProfileDetails = () => {
  const [formData, setFormData] = useState({
    accountType: false,
    gender: 'male',
    firstName: '',
    lastName: '',
    phone: '',
    birthday: '',
    timeZone: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };

  return (
    <UserAccountItemCard title='Profile'>
      <form onSubmit={handleSubmit} className='profile-details'>
        <div className='profile-details-first-row'>
          <div className='profile-details-first-row-columns'>
            <p className='title'>Account Type</p>
            <div className='profile-details-first-row-columns-row'>
              <Radio
                name='accountType'
                checked={formData.accountType === 'Personal'}
                onChange={handleChange}
                label='Personal'
              />
              <Radio
                name='accountType'
                checked={formData.accountType === 'Professional'}
                onChange={handleChange}
                label='Professional'
              />
            </div>
          </div>

          <div className='profile-details-first-row-columns'>
            <p className='title'>Gender</p>
            <div className='profile-details-first-row-columns-row'>
              <Radio
                name='gender'
                checked={formData.gender === 'Male'}
                onChange={handleChange}
                label='Male'
              />
              <Radio
                name='gender'
                checked={formData.gender === 'Female'}
                onChange={handleChange}
                label='Female'
              />
            </div>
          </div>
        </div>
      </form>
    </UserAccountItemCard>
  );
};

export default ProfileDetails;
