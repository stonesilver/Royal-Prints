import ProfilePic from '../../../assets/imgFiles/styles/15.jpg';
import ProfilePic1 from '../../../assets/imgFiles/styles/20.jpg';
import ProfilePic2 from '../../../assets/imgFiles/styles/18.jpg';
import { ReactComponent as EyeIcon } from '../../../assets/eye.svg';
import { ReactComponent as CartIcon } from '../../../assets/cart.svg';
import { ReactComponent as ClockwiseIcon } from '../../../assets/clockwise.svg';
import { ReactComponent as WalletIcon } from '../../../assets/wallet.svg';
import { ReactComponent as MessageIcon } from '../../../assets/message.svg';
import { ReactComponent as HeartIcon } from '../../../assets/heart.svg';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation, Lazy, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/lazy/lazy.scss';
import 'swiper/modules/pagination/pagination.scss';

import './ImagesAndDetails.styles.scss';

const imageArr = [
  { image: ProfilePic, likesCount: 35 },
  { image: ProfilePic1, likesCount: 24 },
  { image: ProfilePic2, likesCount: 12 },
];

const MoreDetailsItem = ({ icon, text }) => (
  <div className='row'>
    {icon}
    <span className='row-text'>{text}</span>
  </div>
);

const ImagesAndDetails = () => {
  return (
    <div className='images-and-details'>
      <div className='images-container'>
        <Swiper
          style={{
            '--swiper-navigation-color': '#673ab7',
            '--swiper-pagination-color': '#673ab7',
          }}
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          autoHeight={true}
          modules={[Navigation, Lazy, Pagination]}
          loop={imageArr?.length > 1 ? true : false}
          className='mySwiper'
        >
          {imageArr.map(({ image, likesCount }, index) => (
            <SwiperSlide key={index} className='mySwiperSlide'>
              <img src={image} alt='full' className='carousel-img' />
              <div className='image-likes'>
                <span className='image-likes-text'>{likesCount}</span>
                <span className='image-likes-icon'>
                  <HeartIcon
                    style={{ width: '1rem', height: '1rem', fill: '#673ab7' }}
                  />
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='details-container'>
        <p className='description'>
          2 pieces, African men suit with matching pants, fashion wear for men
        </p>
        <div className='price-and-shipping'>
          <span className='price'>₦60,000</span>
          <span className='shipping'>Free shipping</span>
        </div>
        <p className='pay-today'>
          Or pay <span className='bold'>₦52</span> today, then{' '}
          <span className='bold'>₦40</span> on Aug 10 and Sep 10
        </p>
        <div className='special-offer'>
          <p className='offer-detail'>
            Up to -20.0% when at least 2 article(s) are purchased.
          </p>
          <span className='border-float'>Shop's Special Offer</span>
        </div>
        <div className='delivery-time'>
          <span className='days'>Get it in 3 days - </span>
          <span className='icon'></span>
          <span className='country'>Nigeria</span>
        </div>
        <div className='more-details'>
          <MoreDetailsItem
            icon={<EyeIcon className='row-icon' />}
            text='Eye 106 views in the last days!'
          />
          <MoreDetailsItem
            icon={<CartIcon className='row-icon' />}
            text='Currently in 64 carts!'
          />
          <MoreDetailsItem
            icon={<ClockwiseIcon className='row-icon' />}
            text='Money back garantee'
          />
          <MoreDetailsItem
            icon={<WalletIcon className='row-icon' />}
            text='Buy now, pay later'
          />
        </div>
        <div className='add-to-cart'>
          <p className='size-guide'>Size Guide</p>
          <button type='button' className='cart-btn'>
            <CartIcon className='cart-btn-icon' /> Add To Cart
          </button>
        </div>
        <div className='contact-seller'>
          <p className='response-detail'>Replies in 26 minutes in average</p>
          <button type='button' className='contact-seller-btn'>
            <MessageIcon className='btn-icon' /> Contact the seller
          </button>
          <p className='report-product'>Report this product to Coronation</p>
        </div>
      </div>
    </div>
  );
};

export default ImagesAndDetails;
