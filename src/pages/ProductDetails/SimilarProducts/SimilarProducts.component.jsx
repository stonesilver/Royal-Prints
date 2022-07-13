import CategoryPageImageCard from '../../../components/CategoryPageImageCard/CategoryPageImageCard.component';
import { pepperDemStyles } from '../../../utils/carouselData';
import './SimilarProducts.styles.scss';

const SimilarProducts = () => {
  const flattenarray = pepperDemStyles.flat();

  return (
    <div className='similar-products'>
      <p className='similar-products-header'>Similar products</p>
      <div className='similar-products-content'>
        {flattenarray
          .filter((item, index) => index < 8)
          .map(({ image, title, description, sponsored }, index) => (
            <CategoryPageImageCard
              key={index}
              image={image}
              title={title}
              description={description}
              sponsored={sponsored}
            />
          ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
