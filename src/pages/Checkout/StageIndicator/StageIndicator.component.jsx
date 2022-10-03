import './StageIndicator.styles.scss';

const StageIndicator = ({ active }) => {
  return (
    <div className='checkout-stage-indicator'>
      <div className='checkout-stage-indicator-bar'>
        <span
          label='Shipping'
          className='checkout-stage-indicator-bar-circle'
        ></span>
        <span
          label='Payment'
          className='checkout-stage-indicator-bar-circle'
        ></span>
        <span
          label='Confirmation'
          className='checkout-stage-indicator-bar-circle'
        ></span>
      </div>
    </div>
  );
};

export default StageIndicator;
