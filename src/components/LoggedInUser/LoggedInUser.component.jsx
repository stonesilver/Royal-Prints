import { useClickOutside } from '../../Hooks/useClickOutside';
import { ReactComponent as PowerIcon } from '../../assets/svg/power.svg';
import { ReactComponent as MailIcon } from '../../assets/svg/mail.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { ReactComponent as ApertureIcon } from '../../assets/svg/aperture.svg';
import { Link } from 'react-router-dom';
import './LoggedInUser.styles.scss';

const className = 'user-dropdown-nav-row-auth-nav-icon';

const navLinks = [
  {
    name: 'My Account',
    icon: <ApertureIcon className={className} />,
    link: '/account/en',
  },
  {
    name: 'Conversations',
    icon: <MailIcon className={className} />,
    link: '/account/en/message',
  },
  {
    name: 'Purchases',
    icon: <CartIcon className={className} />,
    link: '/account/en/purchases',
  },
  {
    name: 'Logout',
    icon: <PowerIcon className={className} />,
    link: '/auth/sign-in',
  },
];

const LoggedInUser = () => {
  const { ref, visible, setVisible } = useClickOutside();

  const handleToggle = () => {
    setVisible((prevS) => !prevS);
  };

  return (
    <div className='auth-user'>
      <img
        src='/images/Nerd-Face.gif'
        className='user-avatar'
        alt='auth user'
        onClick={handleToggle}
      />
      {visible && (
        <div ref={ref} className='user-dropdown'>
          <p className='user-dropdown-user-email'>Logged in as stonesilver12</p>
          <div className='user-dropdown-nav-row'>
            {navLinks.map(({ name, icon, link }) => (
              <Link
                to={link}
                key={name}
                className='user-dropdown-nav-row-auth-nav'
                onClick={handleToggle}
              >
                {icon}
                <p>{name}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInUser;
