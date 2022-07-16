import DescriptionReviewShippingAccordion from './DescriptionReviewShippingAccordion/DescriptionReviewShippingAccordion.component';
import { ReactComponent as RatingIcon } from '../../assets/star.svg';

const rating = (filled, width, height) => {
  return (
    <RatingIcon
      style={{ width, height, fill: filled ? '#ffbf00' : 'transparent' }}
    />
  );
};

// [rating(true, '1rem', '1rem'), rating(false, '1rem', '1rem')]

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
            <div className='total-rating-text'>5 of 5</div>
          </div>
        </div>
        <div className='review-comments'></div>
      </div>
    </DescriptionReviewShippingAccordion>
  );
};

export default Review;
