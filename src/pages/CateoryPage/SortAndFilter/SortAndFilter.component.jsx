import React, { useState } from 'react';
import { ReactComponent as ChevronDown } from '../../../assets/chevron-right.svg';
import { sortFilterData } from '../../../utils/sortFilterData';
import { Link } from 'react-router-dom';
import { useClickOutside } from '../../../Hooks/useClickOutside';
import SelectDropdown from '../SelectDropdown';
import './SortAndFilter.styles.scss';

const SortAndFilter = () => {
  const [submenu, setSubmenu] = useState('');

  const { ref, visible, setVisible } = useClickOutside();

  const showSubMenu = (data) => {
    setSubmenu(data);
  };

  return (
    <div className='sort-and-filter'>
      <div className='sort-and-filter-container'>
        {sortFilterData.map(({ category_name, links }, index) => (
          <div className='sort-and-filter-item' key={index}>
            <div
              ref={ref}
              className='sort-and-filter-item-select'
              onClick={() => {
                showSubMenu(category_name);
                setVisible((prevS) => !prevS);
              }}
            >
              <p onClick={() => setVisible(false)}>{category_name}</p>
              <ChevronDown className='state-icon' />
            </div>

            <SelectDropdown
              data={links}
              className={`sub-item ${
                submenu === category_name && visible ? 'active' : ''
              }`}
            />
          </div>
        ))}
      </div>
      <div className='view-items'>
        <Link to='/' className='view-items-link'>
          View Items
        </Link>
      </div>
    </div>
  );
};

export default SortAndFilter;
