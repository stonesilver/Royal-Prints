import DescriptionReviewShippingAccordion from './DescriptionReviewShippingAccordion/DescriptionReviewShippingAccordion.component';
import { ReactComponent as RatingIcon } from '../../assets/star.svg';
import { ReactComponent as FaceIcon } from '../../assets/face.svg';
import { userReviews } from './data';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Navigation, Lazy, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/lazy/lazy.scss';
import 'swiper/modules/pagination/pagination.scss';

const rating = (filled, width, height) => {
  return (
    <RatingIcon
      style={{ width, height, fill: filled ? '#ffbf00' : 'transparent' }}
    />
  );
};

const ratingsArray = [
  rating(true, '1rem', '1rem'),
  rating(true, '1rem', '1rem'),
  rating(true, '1rem', '1rem'),
  rating(true, '1rem', '1rem'),
  rating(true, '1rem', '1rem'),
  rating(false, '1rem', '1rem'),
  rating(false, '1rem', '1rem'),
  rating(false, '1rem', '1rem'),
  rating(false, '1rem', '1rem'),
  rating(false, '1rem', '1rem'),
];

const getRating = (stars) => ratingsArray.slice(5 - stars, 10 - stars);

const ReviewCard = ({ review }) => {
  const { date, name, star, commentedOn, comment, photos } = review;
  return (
    <div className='review-card'>
      <p className='review-card-date'>{date}</p>
      <div className='review-card-icon-name'>
        <span className='face-icon'>
          <FaceIcon />
        </span>
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
                <img src={image} alt='review snapshot' className='review-screenshot' />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

const Review = () => {
  return (
    <DescriptionReviewShippingAccordion initState={false} header='Reviews'>
      <div className='review-content'>
        <div className='review-ratings'>
          <div className='total-rating'>
            <div className='total-rating-stars'>
              {[...Array(5).keys()].map((star) => (
                <span key={star}>{rating(true, '1.5rem', '1.5rem')}</span>
              ))}
            </div>
            <p className='total-rating-text'>5 of 5</p>
          </div>
          <p className='global-rating'>241 global ratings</p>
          <div className='rating-by-stars'>
            {[...Array(5).keys()].map((star, index) => (
              <div key={index} className='rating-by-stars-row'>
                <div className='stars-row'>{getRating(5 - star)}</div>
                <p className='rating-percentage'>{((5 - star) / 5) * 100}%</p>
              </div>
            ))}
          </div>
        </div>
        <div className='review-comments'>
          {userReviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </DescriptionReviewShippingAccordion>
  );
};

export default Review;
