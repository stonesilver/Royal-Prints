import { Link } from 'react-router-dom';

const SelectionSubMenu = () => {
  return (
    <div className='itemMenu'>
      <div className='itemMenucontainer'>
        <div className='subs itemLeft'>
          <header className='header'>Selections</header>
          <div className='content'>
            <div className='groupContent contentLeft'>
              <Link to='/' className='subLink'>
                New in
              </Link>
              <Link to='/' className='subLink'>
                Cheap and Sleek
              </Link>
              <Link to='/' className='subLink'>
                Deals
              </Link>
            </div>
          </div>
        </div>
        <div className='subs itemRight'>
          <header className='header'>Collections</header>
          <div className='content'>
            <div className='groupContent contentLeft'>
              <Link to='/en/category' className='subLink'>
                New in
              </Link>
              <Link to='/en/category' className='subLink'>
                No Ankara Allowed
              </Link>
              <Link to='/en/category' className='subLink'>
                Hot products
              </Link>
              <Link to='/en/category' className='subLink'>
                Sexy
              </Link>
              <Link to='/en/category' className='subLink'>
                Black Pride
              </Link>
              <Link to='/en/category' className='subLink'>
                Spring Drops
              </Link>
            </div>
            <div className='groupContent contentRight'>
              <Link to='/en/category' className='subLink'>
                Summer Attire
              </Link>
              <Link to='/en/category' className='subLink'>
                Evening Wear
              </Link>
              <Link to='/en/category' className='subLink'>
                The Best-Sellers
              </Link>
              <Link to='/en/category' className='subLink'>
                Masks and headwraps
              </Link>
              <Link to='/en/category' className='subLink'>
                Face Masks
              </Link>
              <Link to='/en/category' className='subLink'>
                Cowrie is the new chic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionSubMenu;
