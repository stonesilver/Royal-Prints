import CategoryPageImageCard from '../CategoryPageImageCard/CategoryPageImageCard.component';
import { pepperDemStyles } from '../../../utils/carouselData';
import './CategoryDisplay.styles.scss';

const CategoryDisplay = () => {
  const flattenarray = pepperDemStyles.flat();
  return (
    <div className='category-display'>
      {flattenarray.map(({ image, title, description, sponsored }, index) => (
        <CategoryPageImageCard
          key={index}
          image={image}
          title={title}
          description={description}
          sponsored={sponsored}
        />
      ))}
    </div>
  );
};

export default CategoryDisplay;
