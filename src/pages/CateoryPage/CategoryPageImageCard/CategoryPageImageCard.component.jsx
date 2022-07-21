import { useState } from 'react';
import TestImg from '../../../assets/imgFiles/image-placeholder.webp';
import { ReactComponent as HeartIcon } from '../../../assets/heart.svg';
import { ReactComponent as BasketIcon } from '../../../assets/basket.svg';
import { Link } from 'react-router-dom';
import './categoryPageImageCard.styles.scss';

const CategoryPageImageCard = ({ image, title, description, sponsored }) => {
  const [imageSrc, setImageSrc] = useState(TestImg);
  const handleClick = (e) => {
    e.preventDefault();
    alert('Added to Favourite');
  };

  const removePlaceholderImage = () => {
    setTimeout(() => {
      setImageSrc(image);
    }, 3000);
  };
  return (
    <Link
      className='category-page-image-card'
      to='/en/article/black-jacket-JD52S5E'
    >
      <div className='category-page-image-card-image-container'>
        <img
          src={imageSrc}
          alt='item'
          className='category-img'
          onLoad={removePlaceholderImage}
        />
        <span className='favourite fav-cart' onClick={handleClick}>
          <HeartIcon className='fav-cart-icon' />
        </span>
        <span className='add-to-cart fav-cart' onClick={handleClick}>
          <BasketIcon className='fav-cart-icon' />
        </span>
        {sponsored && <span className='sponsored'>sponsored</span>}
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
    </Link>
  );
};

export default CategoryPageImageCard;
