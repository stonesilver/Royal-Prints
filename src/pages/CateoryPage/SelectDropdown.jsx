import { useState } from 'react';

const SelectDropdown = ({ className, data }) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleClick = (item) => {
    if (currentValue === item) {
      return setCurrentValue('');
    }
    setCurrentValue(item);
  };

  return (
    <div className={className}>
      {data.map((item, index) => (
        <span
          key={index}
          className={`sub-item-option ${currentValue === item && 'active'}`}
          onClick={() => handleClick(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default SelectDropdown;
