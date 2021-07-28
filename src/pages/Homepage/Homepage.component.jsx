import React, { useState } from 'react';
import JumpSuit from '../../assets/imgFiles/jumpsuit.jpg';
import Blazer from '../../assets/imgFiles/blazer.jpg';
import WelcomeImg from '../../assets/imgFiles/Beautiful Ankara white-1820x785 1-1820x785.jpg';
import WomencategoryImg from '../../assets/imgFiles/womenLarge.jpg';
import MencategoryImg from '../../assets/imgFiles/menLarge.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-elastic-carousel';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import StyleCard from '../../components/StylesCard/StylesCard.component';
import { pepperDemStyles, trendingFabrics } from '../../assets/carouselData';
import './Homepage.styles.scss';

const Homepage = () => {
  const [showText, setShowText] = useState(false);
  const imageOnLoad = () => {
    setShowText(true);
  };
  return (
    <div className='homepage'>
      <div className='welcome'>
        <figure className='figure'>
          <img
            src={WelcomeImg}
            alt='welcome'
            className='welcome-img'
            onLoad={imageOnLoad}
          />
          {showText && (
            <figcaption className='caption'>
              <span>Discover classic styles that will</span>
              <span>last beyond the season.</span>
            </figcaption>
          )}
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
          <p className='header-text'>Pepper Dem Styles</p>
        </div>
        <div className='trending-design-carousel'>
          <div className='carousel-container'>
            <Carousel>
              {pepperDemStyles.map((data, index) => (
                <div className='slide' key={index}>
                  {data.map((slide) => (
                    <StyleCard data={slide} key={slide.id} />
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <Link className='view-all'>
          <span>View All</span>
          <span className='view-all-icon'>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </Link>
      </div>
      <div className='trending-design'>
        <div className='header'>
          <p className='header-text'>Trending Fabrics</p>
        </div>
        <div className='trending-design-carousel'>
          <div className='carousel-container'>
            <Carousel>
              {trendingFabrics.map((data, index) => (
                <div className='slide' key={index}>
                  {data.map((slide) => (
                    <StyleCard data={slide} key={slide.id} />
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
        <Link className='view-all'>
          <span>View All</span>
          <span className='view-all-icon'>
            <FontAwesomeIcon icon={faAngleRight} />
          </span>
        </Link>
      </div>
      <div className='jumpsuit-jackets'>
        <div className='jumpsuit-jackets-container'>
          <div className='item'>
            <div className='item-image-container'>
              <img
                src={JumpSuit}
                alt='jump suits'
                className='item-image-container-image'
              />
            </div>
            <Link className='item-body'>
              <span>Jump Suits</span>
            </Link>
          </div>
          <div className='item'>
            <div className='item-image-container'>
              <img
                src={Blazer}
                alt='blazers'
                className='item-image-container-image'
              />
            </div>
            <Link className='item-body'>
              <span>Blazers</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
