import './StageIndicator.styles.scss';

const options = ['Shipping', 'Payment', 'Confirmation'];

const StageIndicator = ({ active }) => {
  return (
    <div className='checkout-stage-indicator'>
      <div className='checkout-stage-indicator-bar'>
        {options.map((item) => (
          <span
            key={item}
            label={item}
            className='checkout-stage-indicator-bar-circle'
          >
            {active === item && (
              <span className='checkout-stage-indicator-bar-circle-active'></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StageIndicator;
