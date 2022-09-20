import ItemSubMenu from '../../components/ItemSubMenu/ItemSubMenu.component';
import SelectionSubMenu from '../../components/SelectionsSubMenu/SelectionSubMenu.component';
import './SubNav.styles.scss';

const SubNav = () => {
  return (
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
  );
};

export default SubNav;
