import { useClickOutside } from '../../Hooks/useClickOutside';
import './LoggedInUser.styles.scss';

const navLinks = ['My Account', 'Conversations', 'Purchases', 'Logout'];

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
            {navLinks.map((item) => (
              <p key={item} className='user-dropdown-nav-row-auth-nav'>
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedInUser;
