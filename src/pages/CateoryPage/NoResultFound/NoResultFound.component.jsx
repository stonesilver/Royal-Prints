import CategoryPageImageCard from '../CategoryPageImageCard/CategoryPageImageCard.component';
import { pepperDemStyles } from '../../../utils/carouselData';
import './NoResultFound.styles.scss';

const NoResultFound = () => {
  const flattenarray = pepperDemStyles.flat();
  return (
    <div className='no-result'>
      <div className='empty-space'></div>

      <div className='no-result-main-content'>
        <p className='header-text'>Whoops, We couldn't find any results.</p>
        <p className='did-you'>Did you try:</p>
        <ul className='try-content'>
          <li className='try-list-item'>
            With fewer words in your search phrase.
          </li>
          <li className='try-list-item'>Without filters.</li>
          <li className='try-list-item'>
            Using the categories navigation only.
          </li>
        </ul>
        <div className='shopping-suggestion'>
          <p className='shopping-suggestion-header-text'>
            Shopping suggestions
          </p>
          <div className='shopping-suggestion-main-grid'>
            {flattenarray.map(
              ({ image, title, description, sponsored }, index) => (
                <CategoryPageImageCard
                  key={index}
                  image={image}
                  title={title}
                  description={description}
                  sponsored={sponsored}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoResultFound;
