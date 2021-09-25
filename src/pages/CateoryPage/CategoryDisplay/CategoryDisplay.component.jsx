import CategoryPageImageCard from '../../../components/CategoryPageImageCard/CategoryPageImageCard.component';
import { pepperDemStyles } from '../../../utils/carouselData';
import './CategoryDisplay.styles.scss';

const CategoryDisplay = () => {
  const flattenarray = pepperDemStyles.flat();
  return (
    <div className='category-display'>
      {flattenarray.map(({ image, title, description }, index) => (
        <CategoryPageImageCard
          key={index}
          image={image}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};

export default CategoryDisplay;
