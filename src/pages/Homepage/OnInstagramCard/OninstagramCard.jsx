import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
// import JumpSuit from '../../../assets/imgFiles/jumpsuit.jpg';

const OninstagramCard = ({image}) => {
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
          <span>
            <FontAwesomeIcon icon={faHeart} />
          </span>
          <span>25</span>
        </div>
        <div className='on-instagram-card-hover-state-like-and-comment'>
          <span>
            <FontAwesomeIcon icon={faComment} />
          </span>
          <span>12</span>
        </div>
      </div>
    </div>
  );
};

export default OninstagramCard;
