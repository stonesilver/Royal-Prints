import { useClickOutside } from '../../Hooks/useClickOutside';
import { ReactComponent as PowerIcon } from '../../assets/svg/power.svg';
import { ReactComponent as MailIcon } from '../../assets/svg/mail.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { ReactComponent as ApertureIcon } from '../../assets/svg/aperture.svg';
import './LoggedInUser.styles.scss';

const className = 'user-dropdown-nav-row-auth-nav-icon';

const navLinks = [
  { name: 'My Account', icon: <ApertureIcon className={className} /> },
  { name: 'Conversations', icon: <MailIcon className={className} /> },
  { name: 'Purchases', icon: <CartIcon className={className} /> },
  { name: 'Logout', icon: <PowerIcon className={className} /> },
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
            {navLinks.map(({ name, icon }) => (
              <div
                key={name}
                className='user-dropdown-nav-row-auth-nav'
                onClick={handleToggle}
              >
                {icon}
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInUser;
