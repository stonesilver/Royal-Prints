import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-elastic-carousel';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import StyleCard from '../../../components/StylesCard/StylesCard.component';

const Designscarousel = ({ headerText, stylesArray, link }) => {
  return (
    <div className='trending-design'>
      <div className='header'>
        <p className='header-text'>{headerText}</p>
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
        <span>View All</span>
        <span className='view-all-icon'>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </Link>
    </div>
  );
};

export default Designscarousel;
