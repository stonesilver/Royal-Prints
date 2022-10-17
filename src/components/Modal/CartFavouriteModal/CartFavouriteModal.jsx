import { useEffect } from 'react';
import { ReactComponent as CloseBtn } from '../../../assets/x.svg';
import { toggleCart } from '../../../redux/slice/stateSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useModal } from 'Hooks/useModal';
import './CartFavouriteModal.styles.scss';

const CartModal = ({ children }) => {
  const { activeModal } = useSelector((state) => state.state);
  const dispatch = useDispatch();
  const { ref, visible, setVisible } = useModal();

  useEffect(() => {
    if (activeModal) {
      document.querySelector('body').style.overflow = 'hidden';
    } else {
      document.querySelector('body').style.overflow = 'auto';
    }
  }, [activeModal]);

  const closeCart = () => {
    dispatch(toggleCart(''));
    document.querySelector('body').style.overflow = 'auto';
  };

  return (
    <div className='cart-modal'>
      <div className='cart-modal-container'>
        {/* header and close btn */}
        <div className='title-and-close-btn'>
          <p className='cart-title'>{activeModal}</p>
          <CloseBtn className='cart-close-btn' onClick={closeCart} />
        </div>

        {/* modal content */}
        <div className='cart-modal-container-content'>{children}</div>
      </div>
    </div>
  );
};

export default CartModal;
