import { pepperDemStyles } from '../../utils/carouselData';
import './RecentlyViewed.styles.scss';

const RecentlyViewed = () => {
  const flattenedArray = pepperDemStyles.flat();

  return (
    <div className='recently-viewed'>
      <div className='recently-viewed-container'>
        {flattenedArray.map(({ image }, index) => (
          <div className='recently-viewed-card' key={index}>
            <img
              src={image}
              alt='viewed'
              className='recently-viewed-card-img'
            />
          </div>
        ))}
      </div>
      <p className='see-all-viewed'>See all your recently viewed items</p>
    </div>
  );
};

export default RecentlyViewed;
