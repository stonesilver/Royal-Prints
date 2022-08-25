import SellerPic from '../../../assets/imgFiles/styles/31.jpg';
import { ReactComponent as TrashIcon } from '../../../assets/trash.svg';
import { getRating } from '../../../utils/rating';
import './CartItemCard.styles.scss';

const CartCard = () => {
  return (
    <div className='cart-card'>
      <div className='seller-name-star-rating'>
        <p className='seller-name'>Rolloyds</p>
        <div className='star-rating'>
          <div className='stars-rows'>{getRating(5, '0.75rem', '0.75rem')}</div>
          <span className='review-count'>(145)</span>{' '}
        </div>
      </div>
      <div className='content-row'>
        <div className='image-container'>
          <img src={SellerPic} alt='seller' className='seller-img' />
        </div>
        <div className='item-details'>
          <div className='item-name-price'>
            <p className='item-name'>Classic Gentleman 2 Piece Kaft</p>
            <p className='item-price'>₦47,920</p>
          </div>
          <div className='mutate-item-quantity-delete-btn'>
            <div className='mutate-item-quantity'>
              <div className='mutate-item-quantity-decrease mutation-column'>
                -
              </div>
              <div className='mutate-item-quantity-current-quantity mutation-column'>
                1
              </div>
              <div className='mutate-item-quantity-increase mutation-column'>
                +
              </div>
            </div>
            <TrashIcon className='delete-btn' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
