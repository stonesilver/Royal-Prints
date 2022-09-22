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
        
      </form>
    </UserAccountItemCard>
  );
};

export default ProfileDetails;
