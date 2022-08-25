import CartCard from './CartItemCard/CartItemCard.component';
import { ReactComponent as SadMoodIcon } from '../../assets/mood-sad.svg';
import CartFavouriteModal from '../Modal/CartFavouriteModal/CartFavouriteModal';
import './CartModal.styles.scss';

const CartModal = () => {
  return (
    <CartFavouriteModal>
      <div className='cart-items'>
        <div className='cart-items-empty'>
          <p className='cart-items-empty-header'>
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
    </CartFavouriteModal>
  );
};

export default CartModal;
