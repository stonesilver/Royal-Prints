import { ReactComponent as FaceIcon } from '../../../../assets/face.svg';
import { getRating } from '../../../../utils/rating';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation, Lazy, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/lazy/lazy.scss';
import 'swiper/modules/pagination/pagination.scss';
import './ReviewCard.styles.scss';

const ReviewCard = ({ review }) => {
  const { date, name, star, commentedOn, comment, photos } = review;
  return (
    <div className='review-card'>
      <p className='review-card-date'>{date}</p>
      <div className='review-card-icon-name'>
        <FaceIcon className='face-icon' />
        <div className='reviewer-name'>{name}</div>
      </div>
      <div className='rating-and-links'>
        <div className='stars-row'>{getRating(star)}</div>
        <span className='on-text'>on</span>
        {commentedOn.map((comment, index) => (
          <div className='link-to-item' key={index}>
            {index + 1 === 1 ? (
              ''
            ) : index + 1 === commentedOn.length ? (
              <span className='and'>and</span>
            ) : (
              ','
            )}
            {comment}
          </div>
        ))}
      </div>
      {comment && <p className='review-comment'>{comment}</p>}
      {photos && (
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
            loop={photos?.length > 1 ? true : false}
            className='mySwiper'
          >
            {photos.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt='review snapshot'
                  className='review-screenshot'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
