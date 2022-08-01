import { ReactComponent as ChevronLeft } from '../../../assets/chevron-left.svg';
import { ReactComponent as VerifyIcon } from '../../../assets/circle-check.svg';
import { useNavigate } from 'react-router-dom';
import sellerPic from '../../../assets/imgFiles/styles/3.jpg';
import { getRating } from '../../../utils/rating';
import './index.styles.scss';

const SellerInfo = ({ flagUrl }) => {
  const navigate = useNavigate();

  return (
    <div className='seller-info'>
      <div className='back-btn' onClick={() => navigate(-1)}>
        <ChevronLeft />
      </div>
      <div className='seller-info-seller-img-container'>
        <img src={sellerPic} alt='seller' className='small-img' />
      </div>
      <div className='seller-info-name-and-status'>
        <div className='name-country'>
          <h3 className='seller-name'>fashion-home</h3>
          <img src={flagUrl} alt='country flag' className='country' />
        </div>
        <div className='verify-status-rating'>
          <div className='rating'>
            {getRating(5, '0.875rem', '0.875rem').map((star, index) => (
              <span key={index}>{star}</span>
            ))}
            <span className='review-count'>(26)</span>
          </div>
          <div className='verify'>
              <VerifyIcon className='verify-icon' />
            <span>Verified seller</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
