import JumpSuit from '../../../assets/imgFiles/jumpsuit.jpg';
import Blazer from '../../../assets/imgFiles/blazer.jpg';
import bagShopImg from '../../../assets/imgFiles/bag_shop.jpg';
import { Link } from 'react-router-dom';

const JumpsuitsJacckets = () => {
  return (
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
  );
};

export default JumpsuitsJacckets;
