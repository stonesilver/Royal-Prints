import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as CommentIcon } from '../../assets/comment.svg';
import { ReactComponent as DatabaseIcon } from '../../assets/database.svg';
import { ReactComponent as LockIcon } from '../../assets/lock.svg';
import { ReactComponent as ThumbUpIcon } from '../../assets/thumb-up.svg';
import { ReactComponent as ChevronRightIcon } from '../../assets/chevron-right.svg';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { useLocation } from 'react-router-dom';
import RecentlyViewed from '../RecentlyViewed/RecentlyViewed.component';
import './Footer.styles.scss';

const Footer = () => {
  const location = useLocation();

  return (
    <div className='footer'>
      <div className='satisfaction-secured-transactions'>
        <div className='satisfaction-secured-transactions-card'>
          <ThumbUpIcon className='satisfaction-secured-transactions-card-icon' />
          <p className='satisfaction-secured-transactions-card-text'>
            97% satisfaction
          </p>
        </div>
        <div className='satisfaction-secured-transactions-card'>
          <CommentIcon className='satisfaction-secured-transactions-card-icon' />
          <p className='satisfaction-secured-transactions-card-text'>
            Discuss with designers
          </p>
        </div>
        <div className='satisfaction-secured-transactions-card'>
          <DatabaseIcon className='satisfaction-secured-transactions-card-icon ' />
          <p className='satisfaction-secured-transactions-card-text'>
            Payments in 3 times
          </p>
        </div>
        <div className='satisfaction-secured-transactions-card'>
          <LockIcon className='satisfaction-secured-transactions-card-icon' />
          <p className='satisfaction-secured-transactions-card-text'>
            Secured transactions
          </p>
        </div>
      </div>

      {location.pathname === '/' && <RecentlyViewed />}

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
              <ChevronRightIcon className='footer-link-icon' />
              <span>About</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Press</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Jobs</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Legal</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Policies</span>
            </p>
          </div>
        </div>
        <div className='footer-grid-nav'>
          <p className='footer-grid-nav-header'>Need Help ?</p>
          <div className='footer-grid-nav-links'>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Sell on coronation</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>General Help</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Buyers Help</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Size Guide</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Sell everywhere with CONA</span>
            </p>
          </div>
        </div>
        <div className='footer-grid-nav'>
          <p className='footer-grid-nav-header'>What else ?</p>
          <div className='footer-grid-nav-links'>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Shops Directory</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Contact Us</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>African fashion white paper</span>
            </p>
            <p className='footer-grid-nav-links-link'>
              <ChevronRightIcon className='footer-link-icon' />
              <span>Blog</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
