import { ReactComponent as CloseBtn } from '../../assets/x.svg';
import './Cart.styles.scss';

const Cart = () => {
  return (
    <div className='cart-modal'>
      <div className='cart-modal-container'>
        <div className='title-and-close-btn'>
          <p className='cart-title'>MY CART</p>
          <CloseBtn className='cart-close-btn' />
        </div>
      </div>
    </div>
  );
};

export default Cart;
