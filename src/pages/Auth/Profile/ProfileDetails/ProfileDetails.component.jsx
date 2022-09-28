import { useState } from 'react';
import Radio from '../../../../components/base/Radio/Radio.component';
import Input from '../../../../components/base/Input/Input.component';
import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './ProfileDetails.styles.scss';
import PhoneNumber from '../../../../components/base/PhoneNumber/PhoneNumber.component';
import { months, year, days } from '../../../../utils/customSelectData';
import timeZones from '../../../../assets/timeZones.json';
import CustomSelect from '../../../../components/base/CustomSelect/CustomSelect';

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

        {/* First and last name */}
        <div className='profile-details-first-row'>
          <div className='profile-details-first-row-columns'>
            <p className='title'>First Name</p>
            <Input
              type='text'
              name='firstName'
              value={formData.firstName}
              handleChange={handleChange}
            />
          </div>
          <div className='profile-details-first-row-columns'>
            <p className='title'>Last Name</p>
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
            <p className='title'>Phone Number</p>
            <PhoneNumber
              value={formData.phone}
              setState={setFormData}
              handleChange={handleChange}
              Iso2Code={formData.Iso2Code}
            />
          </div>
          <div className='profile-details-first-row-columns'>
            <p className='title'>Birth Date</p>
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
            <p className='title'>Time Zone</p>
            <CustomSelect
              label='timeZone'
              value={formData.timeZone}
              handleChange={handleTImeZoneChange}
              options={timeZones}
            />
          </div>
        </div>

        {/* Submit button */}
        <button type='submit' className='profile-submit-btn'>
          Update Profile
        </button>
      </form>
    </UserAccountItemCard>
  );
};

export default ProfileDetails;
