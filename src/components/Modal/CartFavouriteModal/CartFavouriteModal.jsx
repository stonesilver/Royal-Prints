import { ReactComponent as CloseBtn } from '../../../assets/x.svg';
import { toggleCart } from '../../../redux/slice/stateSlice';
import { useDispatch } from 'react-redux';
import './CartFavouriteModal.styles.scss';

const CartModal = ({ children }) => {
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
        <div className='cart-modal-container-content'>{children}</div>
      </div>
    </div>
  );
};

export default CartModal;
