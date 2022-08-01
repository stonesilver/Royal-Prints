import DescriptionReviewShippingAccordion from '../DescriptionReviewShippingAccordion/DescriptionReviewShippingAccordion.component';
import { userReviews } from '../data';
import ReviewCard from './ReviewCard/ReviewCard.component';
import { getRating } from '../../../utils/rating';
import './Review.styles.scss';

const Review = () => {
  return (
    <DescriptionReviewShippingAccordion initState={false} header='Reviews'>
      <div className='review-content'>
        <div className='review-ratings'>
          <div className='total-rating'>
            <div className='total-rating-stars'>
              {getRating(5, '1.5rem', '1.5rem').map((star, index) => (
                <span key={index}>{star}</span>
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
