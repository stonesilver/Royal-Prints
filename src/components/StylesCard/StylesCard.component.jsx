import { Link } from 'react-router-dom';
import './StylesCard.styles.scss';

const StyleCard = ({ data: { image, title, description } }) => {
  return (
    <Link className='styles-card' to='/en/article/black-jacket-JD52S5E'>
      <div className='styles-card-imagecontainer'>
        <img
          src={image}
          alt={title}
          className='styles-card-imagecontainer-image'
        />
      </div>
      <div className='styles-card-body'>
        <p className='styles-card-body-title'>{title}</p>
        <p className='styles-card-body-description'>{description}</p>
      </div>
    </Link>
  );
};

export default StyleCard;
