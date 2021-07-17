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

export default ItemSubMenu;
