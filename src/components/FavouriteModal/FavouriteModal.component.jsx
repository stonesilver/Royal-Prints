import CartFavouriteModal from '../Modal/CartFavouriteModal/CartFavouriteModal';
import './FavouriteModal.styles.scss'

const FavouriteModal = () => {
  return (
    <CartFavouriteModal>
      <div className='favourite-modal'>
        <p className='nofav'>You have no favorite</p>
      </div>
    </CartFavouriteModal>
  );
};

export default FavouriteModal;