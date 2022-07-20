import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import { ReactComponent as ChevronRight } from '../../../assets/chevron-right.svg';
import StyleCard from '../../../components/StylesCard/StylesCard.component';

const Designscarousel = ({ headerText, stylesArray, link }) => {
  return (
    <div className='trending-design'>
      <div className='title'>
        <p className='title-text'>{headerText}</p>
      </div>
      <div className='trending-design-carousel'>
        <div className='carousel-container'>
          <Carousel>
            {stylesArray.map((data, index) => (
              <div className='slide' key={index}>
                {data.map((slide) => (
                  <StyleCard data={slide} key={slide.id} />
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <Link className='view-all' to={link}>
        <span className='view-all-text'>View All</span>
        <ChevronRight className='view-all-icon' />
      </Link>
    </div>
  );
};

export default Designscarousel;
