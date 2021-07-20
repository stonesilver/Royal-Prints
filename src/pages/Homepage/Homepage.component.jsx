import WelcomeImg from '../../assets/imgFiles/Beautiful Ankara white-1820x785 1-1820x785.jpg';
import WomencategoryImg from '../../assets/imgFiles/womenLarge.jpg';
import MencategoryImg from '../../assets/imgFiles/menLarge.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Homepage.styles.scss';

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='welcome'>
        <figure className='figure'>
          <img src={WelcomeImg} alt='welcome' className='welcome-img' />
          <figcaption className='caption'>
            <span>Discover classic styles that will</span>
            <span>last beyond the season.</span>
          </figcaption>
        </figure>
      </div>
      <div className='menWomenCategory'>
        <figure className='womenMenContainer'>
          <img
            src={WomencategoryImg}
            alt='women-category'
            className='wmCategory-img'
          />
          <figcaption className='explore-all'>
            <Link to='/women' className='explore-all-link'>
              Explore All
            </Link>
          </figcaption>
        </figure>
        <figure className='womenMenContainer'>
          <img
            src={MencategoryImg}
            alt='men-category'
            className='wmCategory-img'
          />
          <figcaption className='explore-all'>
            <Link to='/men' className='explore-all-link'>
              Explore All
            </Link>
          </figcaption>
        </figure>
      </div>
      <div className='trending-design'>
        <div className='header'>
          <p className='header-text'>Trending Styles</p>
        </div>
        <div className='trending-design-carousel'>
          <div className='left-arrow arrow'>
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div className='carousel-container'>
            <div className='slide'>First</div>
            <div className='slide'>Second</div>
            <div className='slide'>Third</div>
            <div className='slide'>Fourth</div>
            <div className='slide'>Fifth</div>
          </div>
          <div className='right-arrow arrow'>
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
        <Link className='view-all'>
          <span>View All</span>
          <span>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
