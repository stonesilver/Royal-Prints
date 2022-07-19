// import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ItemSubMenu = () => {
  return (
    <div className='itemMenu'>
      <div className='itemMenucontainer'>
        <div className='subs itemLeft'>
          <header className='header'>Clothings</header>
          <div className='content'>
            <div className='contentLeft'>
              <p className='subMenuLink'>
                <span>Women Clothing</span>
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </p>
              <p className='subMenuLink'>
                <span>Men Clothing</span>
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </p>
              <p className='subMenuLink'>
                <span>Kids and Babies</span>
                <span>
                  <FontAwesomeIcon icon={faAngleRight} />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className='subs itemRight'>
          <header className='header'>Women Clothings</header>
          <div className='content'>
            <div className='groupContent contentLeft'>
              <Link to='/' className='subLink'>
                New in
              </Link>
              <Link to='/' className='subLink'>
                No Ankara Allowed
              </Link>
              <Link to='/' className='subLink'>
                Hot products
              </Link>
              <Link to='/' className='subLink'>
                Sexy
              </Link>
              <Link to='/' className='subLink'>
                Black Pride
              </Link>
              <Link to='/' className='subLink'>
                Spring Drops
              </Link>
            </div>
            <div className='groupContent contentRight'>
              <Link to='/' className='subLink'>
                Summer Attire
              </Link>
              <Link to='/' className='subLink'>
                Evening Wear
              </Link>
              <Link to='/' className='subLink'>
                The Best-Sellers
              </Link>
              <Link to='/' className='subLink'>
                Masks and headwraps
              </Link>
              <Link to='/' className='subLink'>
                Face Masks
              </Link>
              <Link to='/' className='subLink'>
                Cowrie is the new chic
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSubMenu;
