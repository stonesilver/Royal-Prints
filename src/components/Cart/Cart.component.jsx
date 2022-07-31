import CartCard from './CartCard.component';
import { ReactComponent as CloseBtn } from '../../assets/x.svg';
import { ReactComponent as SadMoodIcon } from '../../assets/mood-sad.svg';
import './Cart.styles.scss';

const Cart = () => {
  return (
    <div className='cart-modal'>
      <div className='cart-modal-container'>
        {/* header and close btn */}
        <div className='title-and-close-btn'>
          <p className='cart-title'>MY CART</p>
          <CloseBtn className='cart-close-btn' />
        </div>

        {/* modal content */}
        <div className='cart-modal-container-content'>
          <div className='cart-modal-container-content-empty'>
            <p className='cart-modal-container-content-empty-header'>
              Your cart is empty
            </p>
            <SadMoodIcon className='empty-cart-icon' />
          </div>
          {[...Array(5).keys()].map((item) => (
            <CartCard key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
