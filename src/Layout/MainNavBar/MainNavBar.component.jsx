import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as CrownIcon } from '../../assets/crown.svg';
import ItemSubMenu from '../../components/ItemSubMenu/ItemSubMenu.component';
import SelectionSubMenu from '../../components/SelectionsSubMenu/SelectionSubMenu.component';
import { useStickyNavBar } from '../../Hooks/useStickyNavBar.js';
import CartModal from '../../components/CartModal/CartModal.component';
import FavouriteModal from '../../components/FavouriteModal/FavouriteModal.component';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCart } from '../../redux/slice/stateSlice';
import './MainNavBar.styles.scss';
import LoggedInUser from '../../components/LoggedInUser/LoggedInUser.component';

const MainNavBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const position = useStickyNavBar();

  const { activeModal } = useSelector((state) => state.state);
  const dispatch = useDispatch();

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
    <>
      <div className={`nav-bar ${position === 'sticky' && 'sticky'}`}>
        {activeModal === 'my cart' && <CartModal />}
        {activeModal === 'favourites' && <FavouriteModal />}
        <div className='mainNav'>
          <Link to='/' className='brandName'>
            <span>Coronation</span>
            <CrownIcon className='brandName-crown' />
          </Link>
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
            <div className='mobileSearch'>
              <SearchIcon className='nav-icon' />
            </div>
            {/* <Link to='/auth/sign-up'>
            <UserIcon className='nav-icon' />
          </Link> */}
            <LoggedInUser />
            <div className='icon' onClick={showFavourite}>
              <HeartIcon className='count-position nav-icon' />
              <div className='icon-count'>2</div>
            </div>
            <div className='icon' onClick={showCart}>
              <CartIcon className='count-position nav-icon' />
              <div className='icon-count'>5</div>
            </div>
          </div>
        </div>
        <div className='subNav'>
          <div className='subNavItem'>
            <div className='item'>
              <div className='itemHeader'>Selections</div>
              <SelectionSubMenu />
            </div>
            <div className='item'>
              <div className='itemHeader'>Deals</div>
            </div>
            <div className='item'>
              <div className='itemHeader'>Clothings</div>
              <ItemSubMenu />
            </div>
            <div className='item'>
              <div className='itemHeader'>Jewelry</div>
              <ItemSubMenu />
            </div>
            <div className='item'>
              <div className='itemHeader'>Bags and Accessories</div>
              <ItemSubMenu />
            </div>
            <div className='item'>
              <div className='itemHeader'>Fabrics</div>
              <ItemSubMenu />
            </div>
            <div className='item'>
              <div className='itemHeader'>Beauty, Wellness and Food</div>
              <ItemSubMenu />
            </div>
            <div className='item'>
              <div className='itemHeader'>Home and Art</div>
              <ItemSubMenu />
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default MainNavBar;
