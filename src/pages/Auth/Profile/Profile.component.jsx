import QuickNav from './QuickNav/QuickNav.component';
import UploadAvatar from './UploadAvatar/UploadAvatar.component';
import './Profile.styles.scss';

const Profile = () => {
  return (
    <div className='user-profile'>
      <QuickNav />
      <UploadAvatar />
    </div>
  );
};

export default Profile;
