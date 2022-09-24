import { useState } from 'react';
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

  const handleSubmit = () => {
    alert(JSON.stringify(formData));
  };

  return (
    <UserAccountItemCard title='Profile'>
      <form onSubmit={handleSubmit} className='profile-details'>
        <div className='profile-details-first-row'>
          <div className='profile-details-first-row-columns'>
            <p className='title'>Account Type</p>
            <label htmlFor='account-type'>Personal</label>
            <input type='radio' name='account-type' />
            <label htmlFor='account-type'>Professional</label>
            <input type='radio' name='account-type' />
          </div>
          <div className='profile-details-first-row-columns'>
            <p className='title'>Gender</p>
            <label htmlFor='gender'>Male</label>
            <input type='radio' name='gender' />
            <label htmlFor='gender'>Female</label>
            <input type='radio' name='gender' />
          </div>
        </div>
      </form>
    </UserAccountItemCard>
  );
};

export default ProfileDetails;
