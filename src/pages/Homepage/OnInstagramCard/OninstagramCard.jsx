import { ReactComponent as HeartIcon } from '../../../assets/heart.svg';
import { ReactComponent as MessageIcon } from '../../../assets/message.svg';

const OninstagramCard = ({ image }) => {
  return (
    <div className='on-instagram-card'>
      <div className='on-instagram-card-img-container'>
        <img
          src={image}
          alt='insta'
          className='on-instagram-card-img-container-img'
        />
      </div>
      <div className='on-instagram-card-hover-state'>
        <div className='on-instagram-card-hover-state-like-and-comment'>
          <HeartIcon
            onClick={() => alert('Dummy Like!!!')}
          />
          <span>25</span>
        </div>
        <div className='on-instagram-card-hover-state-like-and-comment'>
          <MessageIcon onClick={() => alert('Dummy Comment!!!')} />
          <span>12</span>
        </div>
      </div>
    </div>
  );
};

export default OninstagramCard;
