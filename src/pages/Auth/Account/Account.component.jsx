import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../../assets/svg/home.svg';
import { ReactComponent as MessageIcon } from '../../../assets/message.svg';
import { ReactComponent as WalletIcon } from '../../../assets/svg/wallet.svg';
import './Account.styles.scss';
import SideBarItem from './SideBarItem';

const sideBarItem = [
  {
    name: 'My Account',
    icon: <HomeIcon className='sidebar-item-icon' />,
    link: '/account/en',
  },
  {
    name: 'Conversation',
    icon: <MessageIcon className='sidebar-item-icon' />,
    link: '/account/en/message',
  },
  {
    name: 'Wallet ($0)',
    icon: <WalletIcon className='sidebar-item-icon' />,
    link: '/account/en/wallet',
  },
];

const Account = () => {
  return (
    <div className='user-account'>
      <div className='user-account-sidebar'>
        <div className='profile-detail'>
          <Link to='en/profile' className='dummy-avatar'></Link>
          <p className='username'>stonesilver12</p>
          <Link to='en/profile' className='my-profile-btn'>
            My Profile
          </Link>
          {sideBarItem.map(({ name, icon, link }) => (
            <SideBarItem key={name} name={name} icon={icon} link={link} />
          ))}
        </div>
      </div>
      <div className='user-account-content'></div>
    </div>
  );
};

export default Account;
