import { Link } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../../assets/svg/home.svg';
import { ReactComponent as MessageIcon } from '../../../assets/message.svg';
import { ReactComponent as WalletIcon } from '../../../assets/svg/wallet.svg';
import { ReactComponent as HeartIcon } from '../../../assets/heart.svg';
import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import SideBarItem from './SideBarItem';
import './Account.styles.scss';

const className = 'sidebar-item-icon';

const sideBarItem = [
  {
    name: 'My Account',
    icon: <HomeIcon className={className} />,
    link: '/account/en',
  },
  {
    name: 'Conversation',
    icon: <MessageIcon className={className} />,
    link: '/account/en/message',
  },
  {
    name: 'Wallet ($0)',
    icon: <WalletIcon className={className} />,
    link: '/account/en/wallet',
  },
];

const moreItem = [
  {
    name: 'Favourite',
    icon: <HeartIcon className={className} />,
    link: '/account/en/favourite',
  },
  {
    name: 'Create Your Shop',
    icon: <MessageIcon className={className} />,
    link: '/account/en/create-shop',
  },
  {
    name: 'Contact Coronation',
    icon: <PlusIcon className={className} />,
    link: '/contact',
  },
];

const contentRow = ['Waiting acceptation', 'In Preparation', 'In Transit'];

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
        <hr className='horizontal-line' />
        <div className='more-items'>
          {moreItem.map(({ name, icon, link }) => (
            <SideBarItem
              key={name}
              name={name}
              icon={icon}
              link={link}
              border
            />
          ))}
        </div>
      </div>
      <div className='user-account-content'>
        <p className='user-account-content-header'>Current purchases</p>
        {contentRow.map((item) => (
          <div key={item} className='user-account-content-items-row'>
            <p className='content-link'>{item}</p>
            <p className='content-link-count'>0</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
