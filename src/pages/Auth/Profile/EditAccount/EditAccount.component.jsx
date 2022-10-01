import { useState } from 'react';
import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import Input from '../../../../components/base/Input/Input.component';
import './EditAccount.styles.scss';
import FormSubmitBtn from '../../../../components/FormSubmitBtn/FormSubmitBtn.component';

const EditAccount = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    currentPassword: '',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  const handleSumit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(formData));
  };

  return (
    <UserAccountItemCard title='Edit Account'>
      <form onSubmit={handleSumit} className='edit-account'>
        {/* Email */}
        <div className='edit-account-row'>
          <p className='edit-account-row-title edit-account-row-important'>
            Email
          </p>
          <Input
            type='text'
            name='email'
            value={formData.email}
            handleChange={handleChange}
          />
        </div>

        {/* Password */}
        <div className='edit-account-row'>
          <p className='edit-account-row-title'>Password</p>
          <Input
            type='password'
            name='password'
            value={formData.password}
            handleChange={handleChange}
          />
          <p className='edit-account-row-description'>
            Leave blank if you don't want to change it.
          </p>
        </div>

        {/* Password confirmation */}
        <div className='edit-account-row'>
          <p className='edit-account-row-title'>Password Confirmation</p>
          <Input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            handleChange={handleChange}
          />
        </div>

        {/* Current password */}
        <div className='edit-account-row'>
          <p className='edit-account-row-title edit-account-row-important'>
            Current Password
          </p>
          <Input
            type='password'
            name='currentPasword'
            value={formData.currentPasword}
            handleChange={handleChange}
          />
          <p className='edit-account-row-description'>
            We need your current password to confirm your changes.
          </p>
        </div>

        {/* Submit button */}
        <FormSubmitBtn label='Update Account' />
      </form>
    </UserAccountItemCard>
  );
};

export default EditAccount;
