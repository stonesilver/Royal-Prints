import JumpSuit from '../../assets/imgFiles/jumpsuit.jpg';
import Blazer from '../../assets/imgFiles/blazer.jpg';
import WelcomeImg1 from '../../assets/imgFiles/large_image.webp';
import WelcomeImg2 from '../../assets/imgFiles/large_image_mobile.webp';
import bagShopImg from '../../assets/imgFiles/bag_shop.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import StyleCard from '../../components/StylesCard/StylesCard.component';
import { pepperDemStyles, trendingFabrics } from '../../assets/carouselData';
import OninstagramCard from './OnInstagramCard/OninstagramCard';
import './Homepage.styles.scss';

const Homepage = () => {
  // I can't get the img element srcSet attribute to work now
  // I will use this logic to render the homepage welcome image for different screen sizes.
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
  }, []);
  const src = screenWidth > 768 ? WelcomeImg1 : WelcomeImg2;
  // This is the code I am using inside the img element but it's not working for now
  // srcSet={`${WelcomeImg2} 768w, ${WelcomeImg1} 1280w`}
  // sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
  return (
    <div className='homepage'>
      <div className='welcome'>
        <figure className='figure'>
          <img src={src} alt='welcome' className='welcome-img' />
        </figure>
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
        <div className='shop-bag'>
          <div className='item'>
            <div className='item-image-container'>
              <img
                src={bagShopImg}
                alt='shop_bag'
                className='item-image-container-image'
              />
            </div>
            <Link className='item-body'>
              <span>The Bag Shop</span>
            </Link>
          </div>
        </div>
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
      <div className='on-instagram'>
        <div className='on-instagram-header'>
          <h2>Coronation On Instagram</h2>
        </div>
        <div className='on-instagram-container'>
          {[...Array(9).keys()].map((card, index) => (
            <OninstagramCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
