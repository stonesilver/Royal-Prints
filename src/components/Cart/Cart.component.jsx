import CartCard from './CartCard/CartCard.component';
import { ReactComponent as CloseBtn } from '../../assets/x.svg';
import { ReactComponent as SadMoodIcon } from '../../assets/mood-sad.svg';
import { toggleCart } from '../../redux/slice/stateSlice';
import { useDispatch } from 'react-redux';
import './Cart.styles.scss';

const Cart = () => {
  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div className='cart-modal'>
      <div className='cart-modal-container'>
        {/* header and close btn */}
        <div className='title-and-close-btn'>
          <p className='cart-title'>MY CART</p>
          <CloseBtn className='cart-close-btn' onClick={closeCart} />
        </div>

        {/* modal content */}
        <div className='cart-modal-container-content'>
          <div className='cart-modal-container-content-empty'>
            <p className='cart-modal-container-content-empty-header'>
              Your cart is empty
            </p>
            <SadMoodIcon className='empty-cart-icon' />
          </div>
          <div className='cart-content'>
            {[...Array(3).keys()].map((item) => (
              <CartCard key={item} />
            ))}
          </div>
          <div className='cart-checkout'>
            <div className='cart-checkout-total'>
              <div className='cart-checkout-total-label'>
                <span className='total'>Total</span>
                <span className='without-shipping'>without shipping</span>
              </div>
              <p className='cart-checkout-total-price'>₦47,920</p>
            </div>
            <button className='cart-checkout-btn'>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
