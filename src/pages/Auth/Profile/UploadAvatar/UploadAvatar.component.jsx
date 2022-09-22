import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import { ReactComponent as PlusIcon } from '../../../../assets/plus.svg';
import './UploadAvatar.styles.scss';

const UploadAvatar = () => {
  return (
    <UserAccountItemCard title='Upload your avatar'>
      <div className='profile-upload-avatar'>
        <div className='profile-upload-avatar-dummy-avatar'>
          <PlusIcon className='add-icon' />
          <p className='text'>upload your avatar</p>
        </div>
      </div>
    </UserAccountItemCard>
  );
};

export default UploadAvatar;
