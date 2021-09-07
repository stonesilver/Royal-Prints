import { pepperDemStyles, trendingFabrics } from '../../assets/carouselData';
import Welcome from './Welcome/Welcome.component';
import JumpsuitsJacckets from './JumpsuitsJackets/JumpsuitsJacckets.component';
import Designscarousel from './DesignsCarousel/Designscarousel.component';
import OnInstagram from './OnInstagram/OnInstagram.component';
import './Homepage.styles.scss';

const Homepage = () => {
  return (
    <div className='homepage'>
      <Welcome />
      <JumpsuitsJacckets />
      <Designscarousel
        headerText='Pepper Dem Styles'
        stylesArray={pepperDemStyles}
      />
      <Designscarousel
        headerText='Trending Fabrics'
        stylesArray={trendingFabrics}
      />
      <OnInstagram />
    </div>
  );
};

export default Homepage;
