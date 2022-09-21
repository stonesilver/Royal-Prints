import { Link } from 'react-router-dom';
import './Account.styles.scss';

const Account = () => {
  return (
    <div className='user-account'>
      <div className='user-account-sidebar'>
        <div className='profile-detail'>
          <div className='dummy-avatar'></div>
          <p className='username'>stonesilver12</p>
          <Link to='account/en/profile' className='my-profile-btn'>
            My Profile
          </Link>
        </div>
      </div>
      <div className='user-account-content'></div>
    </div>
  );
};

export default Account;
