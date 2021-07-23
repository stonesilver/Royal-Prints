import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faUser,
  faHeart,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';
import ItemSubMenu from '../ItemSubMenu/ItemSubMenu.component';
import SelectionSubMenu from '../SelectionsSubMenu/SelectionSubMenu.component';
import './Header.styles.scss';

const Header = () => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!!');
  };
  return (
    <div className='header'>
      <div className='mainNav'>
        <Link to='/' className='brandName'>
          <span>Royal Prints</span>
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
              id='search'
              placeholder='search items and brands'
            />
            <span className='searchIcon'>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </form>
        <div className='accountFavCart'>
          <div className='mobileSearch'>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <Link to='/profile' className='accountIcon icon'>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <Link to='/favourites' className='favouriteIcon icon'>
            <FontAwesomeIcon icon={faHeart} />
            <div className="icon-count">2</div>
          </Link>
          <Link to='/cart' className='cartIcon icon'>
            <FontAwesomeIcon icon={faBriefcase} />
          </Link>
        </div>
      </div>
      <div className='subNav'>
        <div className='subNavItem'>
          <div className='item'>
            <Link className='itemHeader'>Selections</Link>
            <SelectionSubMenu />
          </div>
          <div className='item'>
            <Link className='itemHeader'>Deals</Link>
          </div>
          <div className='item'>
            <Link className='itemHeader'>Clothings</Link>
            <ItemSubMenu />
          </div>
          <div className='item'>
            <Link className='itemHeader'>Jewelry</Link>
            <ItemSubMenu />
          </div>
          <div className='item'>
            <Link className='itemHeader'>Bags and Accessories</Link>
            <ItemSubMenu />
          </div>
          <div className='item'>
            <Link className='itemHeader'>Fabrics</Link>
            <ItemSubMenu />
          </div>
          <div className='item'>
            <Link className='itemHeader'>Beauty, Wellness and Food</Link>
            <ItemSubMenu />
          </div>
          <div className='item'>
            <Link className='itemHeader'>Home and Art</Link>
            <ItemSubMenu />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
