import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as CrownIcon } from '../../assets/crown.svg';
import { useStickyNavBar } from '../../Hooks/useStickyNavBar.js';
import CartModal from '../../components/CartModal/CartModal.component';
import FavouriteModal from '../../components/FavouriteModal/FavouriteModal.component';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../redux/slice/stateSlice';
import './MainNavBar.styles.scss';
import LoggedInUser from '../../components/LoggedInUser/LoggedInUser.component';
import Hamburger from '../../components/Hamburger/Hamburger.component';
import MobileSideBar from '../MobileSideBar/MobileSideBar.component';
import SubNav from '../SubNav/SubNav.component';

const loginedIn = true;

const MainNavBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [open, setOpen] = useState(false);
  const position = useStickyNavBar();

  const { activeModal } = useSelector((state) => state.state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (open) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [open]);

  const handleMenuToggle = () => {
    setOpen((prevS) => !prevS);
  };

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    alert(`searching ${searchInput}`);
  };

  const showCart = () => dispatch(toggleCart('my cart'));
  const showFavourite = () => dispatch(toggleCart('favourites'));

  return (
    <div className={`nav-bar ${position === 'sticky' && 'sticky'}`}>
      {activeModal === 'my cart' && <CartModal />}
      {activeModal === 'favourites' && <FavouriteModal />}

      <div className='mainNav'>
        <div className='brandName-hamburger'>
          <Hamburger open={open} handleMenuToggle={handleMenuToggle} />
          <Link to='/' className='brand'>
            <span className='name'>Coronation</span>
            <CrownIcon className='brand-crown' />
          </Link>
        </div>

        <div className='menOrWomenCategory'>
          <Link to='/men' className='menWomen men'>
            Men
          </Link>
          <Link to='/women' className='menWomen women'>
            Women
          </Link>
        </div>

        <form onSubmit={onFormSubmit} className='form'>
          <div className='formContainer'>
            <input
              type='search'
              name='search'
              value={searchInput}
              onChange={handleChange}
              id='search'
              placeholder='search items and brands'
            />
            <button type='submit' className='searchIcon'>
              <SearchIcon className='search-icon' />
            </button>
          </div>
        </form>

        <div className='accountFavCart'>
          <SearchIcon className='mobileSearch' />

          {loginedIn ? (
            <LoggedInUser />
          ) : (
            <Link to='/auth/sign-up' className='icon-container'>
              <UserIcon className='nav-icon' />
            </Link>
          )}

          <div className='icon-container' onClick={showFavourite}>
            <HeartIcon className='count-position nav-icon' />
            <div className='icon-count'>2</div>
          </div>
          <div className='icon-container' onClick={showCart}>
            <CartIcon className='count-position nav-icon' />
            <div className='icon-count'>5</div>
          </div>
        </div>

        {open && <MobileSideBar />}
      </div>

      <SubNav />
    </div>
  );
};
export default MainNavBar;
