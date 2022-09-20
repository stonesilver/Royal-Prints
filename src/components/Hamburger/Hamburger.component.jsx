import { useState } from 'react';
import './Hamburger.style.scss';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen((prevS) => !prevS);
  };

  return (
    <div className='hamburger' onClick={handleMenuToggle}>
      <div className={`bar ${open && `top`}`}></div>
      <div className={`bar ${open && `middle`}`}></div>
      <div className={`bar ${open && `bottom`}`}></div>
    </div>
  );
};

export default Hamburger;
