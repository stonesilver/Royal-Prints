import { pepperDemStyles, trendingFabrics } from '../../utils/carouselData';
import Welcome from './Welcome/Welcome.component';
import JumpsuitsJacckets from './JumpsuitsJackets/JumpsuitsJacckets.component';
import Designscarousel from './DesignsCarousel/Designscarousel.component';
import OnInstagram from './OnInstagram/OnInstagram.component';
import TheyTalkedAboutUs from './TheyTalkedAboutUs/TheyTalkedAboutUs.component';
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
      <TheyTalkedAboutUs />
    </div>
  );
};

export default Homepage;
