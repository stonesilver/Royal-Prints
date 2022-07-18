import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { sortFilterData } from '../../../utils/sortFilterData';
import { Link } from 'react-router-dom';
import './SortAndFilter.styles.scss';

const SortAndFilter = () => {
  const [displaySubmenu, setDisplaySubmenu] = useState('');
  const showSubMenu = (data) => {
    setDisplaySubmenu(data);
  };
  return (
    <div
      className='sort-and-filter'
      onClick={(e) =>
        e.target.className !== 'sort-and-filter-item-first'
          ? setDisplaySubmenu('')
          : ''
      }
    >
      {sortFilterData.map(({ category_name, links }, index) => (
        <div key={index} className='sort-and-filter-item'>
          <span
            className='sort-and-filter-item-first'
            onClick={() => showSubMenu(category_name)}
          >
            {category_name}
          </span>
          <FontAwesomeIcon className='ml-3' icon={faAngleDown} />
          <div
            className={`sub-item ${
              displaySubmenu === category_name ? 'active' : ''
            }`}
          >
            {links.map((item, index) => (
              <span key={index} className='sub-item-item active'>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
      <div className='flex justify-center items-center w-full mt-4'>
        <Link className='px-8 py-2 rounded bg-black text-center text-white hover:opacity-80'>
          View Items
        </Link>
      </div>
    </div>
  );
};

export default SortAndFilter;
