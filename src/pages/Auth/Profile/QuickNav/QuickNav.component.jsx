import QuickNavCard from './QuickNavCard';
import { ReactComponent as UserIcon } from '../../../../assets/user.svg';
import { ReactComponent as KeyIcon } from '../../../../assets/svg/key.svg';
import { ReactComponent as LocationIcon } from '../../../../assets/svg/location.svg';
import './QuickNav.styles.scss';

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

const QuickNav = () => {
  return (
    <div className='quick-nav-row'>
      {quickNav.map(({ name, icon, link }) => (
        <QuickNavCard key={name} name={name} icon={icon} link={link} />
      ))}
    </div>
  );
};

export default QuickNav;
