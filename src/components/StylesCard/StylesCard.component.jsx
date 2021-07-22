import './StylesCard.styles.scss';

const StyleCard = ({ data: { image, title, description } }) => {
  return (
    <div className='styles-card'>
      <div className='styles-card-imagecontainer'>
        <img src={image} alt={title} className='styles-card-imagecontainer-image' />
      </div>
      <div className='styles-card-body'>
        <p className='styles-card-body-title'>{title}</p>
        <p className='styles-card-body-description'>{description}</p>
      </div>
    </div>
  );
};

export default StyleCard;
