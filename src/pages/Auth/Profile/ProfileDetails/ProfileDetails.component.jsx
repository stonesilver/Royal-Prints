import { useState } from 'react';
import Radio from '../../../../components/base/Radio/Radio.component';
import Input from '../../../../components/base/Input/Input.component';
import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './ProfileDetails.styles.scss';
import PhoneNumber from '../../../../components/base/PhoneNumber/PhoneNumber.component';
import { months, year, days } from '../../../../utils/customSelectData';
import timeZones from '../../../../assets/timeZones.json';
import CustomSelect from '../../../../components/base/CustomSelect/CustomSelect';
import FormSubmitBtn from '../../../../components/FormSubmitBtn/FormSubmitBtn.component';
import FormInputTitle from '../../../../components/base/FormInputTitle/FormInputTitle.component';

const ProfileDetails = () => {
  const [formData, setFormData] = useState({
    accountType: 'Personal',
    gender: 'Male',
    firstName: '',
    lastName: '',
    phone: '+234',
    birthday: {
      Day: '',
      Month: '',
      Year: '',
    },
    timeZone: '(UTC-12:00) International Date Line West',
    Iso2Code: 'NG',
  });

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormData((prevS) => ({ ...prevS, [name]: value }));
  };

  const handleBirthdayChange = (label, value) => {
    setFormData((prevS) => ({
      ...prevS,
      birthday: { ...prevS.birthday, [label]: value },
    }));
  };

  const handleTImeZoneChange = (label, value) => {
    setFormData((prevS) => ({ ...prevS, [label]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formData));
  };

  return (
    <UserAccountItemCard title='Profile'>
      <form onSubmit={handleSubmit} className='profile-details'>
        {/* account type and gender */}
        <div className='profile-details-first-row'>
          <div className='profile-details-first-row-columns'>
            <FormInputTitle label='Account Type' important />
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
            <FormInputTitle label='Gender' important />
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

        {/* First and last name */}
        <div className='profile-details-first-row'>
          <div className='profile-details-first-row-columns'>
            <FormInputTitle label='First Name' important />
            <Input
              type='text'
              name='firstName'
              value={formData.firstName}
              handleChange={handleChange}
            />
          </div>
          <div className='profile-details-first-row-columns'>
            <FormInputTitle label='Last Name' important />
            <Input
              type='text'
              name='lastName'
              value={formData.lastName}
              handleChange={handleChange}
            />
          </div>
        </div>

        {/* Phone number and birth date */}
        <div className='profile-details-first-row'>
          <div className='profile-details-first-row-columns'>
            <FormInputTitle label='Phone Number' important />
            <PhoneNumber
              value={formData.phone}
              setState={setFormData}
              handleChange={handleChange}
              Iso2Code={formData.Iso2Code}
            />
          </div>
          <div className='profile-details-first-row-columns'>
            <FormInputTitle label='Birth Date' important />
            <div className='profile-details-first-row-columns-row'>
              <CustomSelect
                label='Year'
                value={formData.birthday.Year}
                handleChange={handleBirthdayChange}
                options={year()}
              />
              <CustomSelect
                label='Month'
                value={formData.birthday.Month}
                handleChange={handleBirthdayChange}
                options={months}
              />
              <CustomSelect
                label='Day'
                value={formData.birthday.Day}
                handleChange={handleBirthdayChange}
                options={days()}
              />
            </div>
          </div>
        </div>

        {/* Time zone */}
        <div className='profile-details-first-row'>
          <div className='profile-details-first-row-columns'>
            <FormInputTitle label='Time Zone' important />
            <CustomSelect
              label='timeZone'
              value={formData.timeZone}
              handleChange={handleTImeZoneChange}
              options={timeZones}
            />
          </div>
        </div>

        {/* Submit button */}
        <FormSubmitBtn label='Update Profile' />
      </form>
    </UserAccountItemCard>
  );
};

export default ProfileDetails;
