import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import './Footer.styles.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-grid'>
        <div className='footer-grid-first-card'>
          <p className='footer-grid-first-card-header'>Coronation</p>
          <p className='footer-grid-first-card-description'>
            Safely shop for clothing, jewelry, art and modern accessories
            directly from designer boutiques inspired by Africa with delivery
            anywhere in the world.
          </p>
          <div className='footer-grid-first-card-social-media-handles'>
            <FontAwesomeIcon className='icon facebook' icon={faFacebookF} />
            <FontAwesomeIcon className='icon twitter' icon={faTwitter} />
            <FontAwesomeIcon className='icon instagram' icon={faInstagram} />
            <FontAwesomeIcon className='icon pinterest' icon={faPinterestP} />
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
