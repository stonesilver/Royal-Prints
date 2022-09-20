import './Hamburger.style.scss';

const Hamburger = ({ open, handleMenuToggle }) => {
  return (
    <div className='hamburger' onClick={handleMenuToggle}>
      <div className={`bar ${open && `top`}`}></div>
      <div className={`bar ${open && `middle`}`}></div>
      <div className={`bar ${open && `bottom`}`}></div>
    </div>
  );
};

export default Hamburger;
