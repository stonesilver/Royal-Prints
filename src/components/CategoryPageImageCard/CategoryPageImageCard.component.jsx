import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './categoryPageImageCard.styles.scss';

const CategoryPageImageCard = ({ image, title, description }) => {
  return (
    <div className='category-page-image-card'>
      <div className='category-page-image-card-image-container'>
        <img src={image} alt='item' className='category-img' />
        <span className='favourite'>
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <span className='add-to-cart'>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </span>
        <span className='sponsored'>sponsored</span>
        <span className='discount'>14%</span>
      </div>
      <div className='category-page-image-card-body'>
        <div className='title-and-country-flag'>
          <p className='title'>{title}</p>
          <span className='country-flag'></span>
          <span className='country-flag'></span>
        </div>
        <p className='item-description'>{description}</p>
        <div className='price-and-shipping'>
          <span className='price'>₦26,523.78</span>
          <span className='discounted-price'>₦16,523.78</span>
          <span className='shipping'>Free Shipping</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageImageCard;
