import OninstagramCard from '../OnInstagramCard/OninstagramCard';
import { pepperDemStyles } from '../../../utils/carouselData';

const OnInstagram = () => {
  const pepperDemStylesFlat = pepperDemStyles
    .flat()
    .filter((item, index) => index < 9);
  return (
    <div className='on-instagram'>
      <div className='on-instagram-header'>
        <h2>Coronation On Instagram</h2>
      </div>
      <div className='on-instagram-container'>
        {pepperDemStylesFlat.map(({ image }, index) => (
          <OninstagramCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default OnInstagram;
