import { Link } from 'react-router-dom';

const SelectionSubMenu = () => {
  return (
    <div className='itemMenu'>
      <div className='itemMenucontainer'>
        <div className='subs itemLeft'>
          <header className='header'>Selections</header>
          <div className='content'>
            <div className='groupContent contentLeft'>
              <Link className='subLink'>New in</Link>
              <Link className='subLink'>Cheap and Sleek</Link>
              <Link className='subLink'>Deals</Link>
            </div>
          </div>
        </div>
        <div className='subs itemRight'>
          <header className='header'>Collections</header>
          <div className='content'>
            <div className='groupContent contentLeft'>
              <Link className='subLink'>New in</Link>
              <Link className='subLink'>No Ankara Allowed</Link>
              <Link className='subLink'>Hot products</Link>
              <Link className='subLink'>Sexy</Link>
              <Link className='subLink'>Black Pride</Link>
              <Link className='subLink'>Spring Drops</Link>
            </div>
            <div className='groupContent contentRight'>
              <Link className='subLink'>Summer Attire</Link>
              <Link className='subLink'>Evening Wear</Link>
              <Link className='subLink'>The Best-Sellers</Link>
              <Link className='subLink'>Masks and headwraps</Link>
              <Link className='subLink'>Face Masks</Link>
              <Link className='subLink'>Cowrie is the new chic</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionSubMenu;
