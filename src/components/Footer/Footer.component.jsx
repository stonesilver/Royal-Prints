import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faThumbsUp,
  faComments,
  faCoins,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { pepperDemStyles } from '../../utils/carouselData';
import { useLocation } from 'react-router-dom';
import './Footer.styles.scss';

const Footer = () => {
  const flattenedArray = pepperDemStyles.flat();
  const location = useLocation();

  return (
    <div className='footer'>
      <div className='satisfaction-secured-transactions'>
        <div className='satisfaction-secured-transactions-card'>
          <span className='satisfaction-secured-transactions-card-icon'>
            <FontAwesomeIcon icon={faThumbsUp} />
          </span>
          <p className='satisfaction-secured-transactions-card-text'>
            97% satisfaction
          </p>
        </div>
        <div className='satisfaction-secured-transactions-card'>
          <span className='satisfaction-secured-transactions-card-icon'>
            <FontAwesomeIcon icon={faComments} />
          </span>
          <p className='satisfaction-secured-transactions-card-text'>
            Discuss with designers
          </p>
        </div>
        <div className='satisfaction-secured-transactions-card'>
          <span className='satisfaction-secured-transactions-card-icon three-x'>
            <FontAwesomeIcon icon={faCoins} />{' '}
            <span className='three-x'>3X</span>
          </span>
          <p className='satisfaction-secured-transactions-card-text'>
            Payments in 3 times
          </p>
        </div>
        <div className='satisfaction-secured-transactions-card'>
          <span className='satisfaction-secured-transactions-card-icon'>
            <FontAwesomeIcon icon={faLock} />
          </span>
          <p className='satisfaction-secured-transactions-card-text'>
            Secured transactions
          </p>
        </div>
      </div>
      {location.pathname === '/' && (
        <div className='recently-viewed'>
          <div className='recently-viewed-container'>
            {flattenedArray.map(({ image }, index) => (
              <div className='recently-viewed-card' key={index}>
                <img
                  src={image}
                  alt='viewed'
                  className='recently-viewed-card-img'
                />
              </div>
            ))}
          </div>
          <p className='see-all-viewed'>See all your recently viewed items</p>
        </div>
      )}
      <div className='footer-grid'>
        <div className='footer-grid-first-card'>
          <p className='footer-grid-first-card-header'>Coronation</p>
          <p className='footer-grid-first-card-description'>
            Safely shop for clothing, jewelry, art and modern accessories
            directly from designer boutiques inspired by Africa with delivery
            anywhere in the world.
          </p>
          <div className='footer-grid-first-card-social-media-handles'>
            <span className='social-icon facebook'>
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span className='social-icon twitter'>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span className='social-icon instagram'>
              <FontAwesomeIcon icon={faInstagram} />
            </span>
            <span className='social-icon pinterest'>
              <FontAwesomeIcon icon={faPinterestP} />
            </span>
          </div>
        </div>
        <div className='footer-grid-nav'>
          <p className='footer-grid-nav-header'>Wanna know more ?</p>
          <div className='footer-grid-nav-links'>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>About</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Press</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Jobs</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Legal</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Policies</span>
            </p>
          </div>
        </div>
        <div className='footer-grid-nav'>
          <p className='footer-grid-nav-header'>Need Help ?</p>
          <div className='footer-grid-nav-links'>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Sell on coronation</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>General Help</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Buyers Help</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Size Guide</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Sell everywhere with CONA</span>
            </p>
          </div>
        </div>
        <div className='footer-grid-nav'>
          <p className='footer-grid-nav-header'>What else ?</p>
          <div className='footer-grid-nav-links'>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Shops Directory</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Contact Us</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>African fashion white paper</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <FontAwesomeIcon icon={faAngleRight} />
              <span>Blog</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
