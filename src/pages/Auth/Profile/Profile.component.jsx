import { ReactComponent as UserIcon } from '../../../assets/user.svg';
import { ReactComponent as KeyIcon } from '../../../assets/svg/key.svg';
import { ReactComponent as LocationIcon } from '../../../assets/svg/location.svg';
import './Profile.styles.scss';
import QuickNavCard from './QuickNavCard';

const className = 'quick-nav-card-icon';

const quickNav = [
  {
    name: 'Profile',
    icon: <UserIcon className={className} />,
    link: '#profile',
  },
  {
    name: 'Credentials',
    icon: <KeyIcon className={className} />,
    link: '#credentials',
  },
  {
    name: 'Address',
    icon: <LocationIcon className={className} />,
    link: '#address',
  },
];

const Profile = () => {
  return (
    <div className='user-profile'>
      <div className='quick-nav-row'>
        {quickNav.map(({ name, icon, link }) => (
          <QuickNavCard key={name} name={name} icon={icon} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
