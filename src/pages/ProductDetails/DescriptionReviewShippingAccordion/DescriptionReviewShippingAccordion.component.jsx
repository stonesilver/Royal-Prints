import { useState } from 'react';
import { ReactComponent as PlusIcon } from '../../../assets/plus.svg';
import { ReactComponent as MinusIcon } from '../../../assets/minus.svg';
import './DescriptionReviewShippingAccordion.styles.scss';

const DescriptionReviewShippingAccordion = ({
  header,
  children,
  initState,
}) => {
  const [toggle, setToggle] = useState(initState);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='product-accordion'>
      <div className='header-toggle-btn' onClick={handleToggle}>
        <h3 className='header-toggle-btn-header'>{header}</h3>
        {toggle ? (
          <MinusIcon className='header-toggle-btn-btn' />
        ) : (
          <PlusIcon className='header-toggle-btn-btn' />
        )}
      </div>
      <div
        className='product-accordion-content-container'
        style={{ maxHeight: toggle ? '100%' : '0px' }}
      >
        <div className='product-accordion-content-container-content'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default DescriptionReviewShippingAccordion;
