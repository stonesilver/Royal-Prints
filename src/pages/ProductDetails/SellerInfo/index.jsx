import { ReactComponent as ChevronLeft } from '../../../assets/chevron-left.svg';
import { ReactComponent as StarIcon } from '../../../assets/star.svg';
import { ReactComponent as VerifyIcon } from '../../../assets/circle-check.svg';
import { useLocation } from 'react-router-dom';
import sellerPic from '../../../assets/imgFiles/styles/3.jpg';
import './index.styles.scss';

const style = {
  width: '1rem',
  height: '1rem',
};

const SellerInfo = ({ flagUrl }) => {
  const { goBack } = useLocation();

  return (
    <div className='seller-info'>
      <div className='back-btn' onClick={() => goBack()}>
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
            {[
              <StarIcon style={style} />,
              <StarIcon style={style} />,
              <StarIcon style={style} />,
              <StarIcon style={style} />,
              <StarIcon style={style} />,
            ].map((star, index) => (
              <span key={index}>{star}</span>
            ))}
            <span className='review-count'>(26)</span>
          </div>
          <div className='verify'>
            <div className='icon'>
              <VerifyIcon />
            </div>
            <span>Verified seller</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
