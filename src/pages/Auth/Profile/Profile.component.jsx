import QuickNav from './QuickNav/QuickNav.component';
import UploadAvatar from './UploadAvatar/UploadAvatar.component';
import './Profile.styles.scss';
import ProfileDetails from './ProfileDetails/ProfileDetails.component';
import EditAccount from './EditAccount/EditAccount.component';
import ManageAddresses from './ManageAddresses/ManageAddresses.component';

const Profile = () => {
  return (
    <div className='user-profile'>
      <QuickNav />
      <UploadAvatar />
      <ProfileDetails />
      <EditAccount />
      <ManageAddresses />
    </div>
  );
};

export default Profile;
