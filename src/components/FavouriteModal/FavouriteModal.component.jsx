import CartFavouriteModal from '../Modal/CartFavouriteModal/CartFavouriteModal';
import './FavouriteModal.styles.scss';

const FavouriteModal = () => {
  return (
    <CartFavouriteModal>
      <div className='favourite-modal'>
        <img src='/images/file-folder.gif' alt='empty favourite' />
        <p className='nofav'>You have no favourites</p>
      </div>
    </CartFavouriteModal>
  );
};

export default FavouriteModal;
