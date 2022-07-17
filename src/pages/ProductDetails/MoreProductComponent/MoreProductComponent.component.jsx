import CategoryPageImageCard from '../../CateoryPage/CategoryPageImageCard/CategoryPageImageCard.component';
import './MoreProductComponent.styles.scss';

const MoreProductComponent = ({ header, data, btnText }) => {
  return (
    <div className='More-product-component'>
      <p className='More-product-component-header'>{header}</p>
      <div className='More-product-component-content'>
        {data.map(({ image, title, description, sponsored }, index) => (
          <CategoryPageImageCard
            key={index}
            image={image}
            title={title}
            description={description}
            sponsored={sponsored}
          />
        ))}
      </div>
      <button className='see-more-btn'>{btnText}</button>
    </div>
  );
};

export default MoreProductComponent;
