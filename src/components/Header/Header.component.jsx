import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HeartIcon } from '../../assets/heart.svg';
import { ReactComponent as CartIcon } from '../../assets/cart.svg';
import { ReactComponent as UserIcon } from '../../assets/user.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import { ReactComponent as CrownIcon } from '../../assets/crown.svg';
import ItemSubMenu from '../ItemSubMenu/ItemSubMenu.component';
import SelectionSubMenu from '../SelectionsSubMenu/SelectionSubMenu.component';
import './Header.styles.scss';

const Header = () => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    alert(`searching ${searchInput}`);
  };
  return (
    <div className='header'>
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
            <span className='searchIcon'>
              <SearchIcon />
            </span>
          </div>
        </form>
        <div className='accountFavCart'>
          <div className='mobileSearch'>
            <SearchIcon />
          </div>
          <Link to='/profile'>
            <UserIcon />
          </Link>
          <Link to='/favourites' className='icon'>
            <HeartIcon className='count-position' />
            <div className='icon-count'>2</div>
          </Link>
          <Link to='/cart' className='icon'>
            <CartIcon className='count-position' />
            <div className='icon-count'>5</div>
          </Link>
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
  );
};
export default Header;
