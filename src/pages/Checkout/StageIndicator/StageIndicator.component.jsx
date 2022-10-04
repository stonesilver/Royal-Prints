import './StageIndicator.styles.scss';

const options = ['Shipping', 'Payment', 'Confirmation'];

const StageIndicator = ({ active }) => {
  return (
    <div className='checkout-stage-indicator'>
      <div
        className={`checkout-stage-indicator-bar ${
          active.includes('Payment') && 'checkout-stage-indicator-payment'
        } ${
          active.includes('Confirmation') &&
          'checkout-stage-indicator-confirmation'
        }`}
      >
        {options.map((item) => (
          <span
            key={item}
            label={item}
            className='checkout-stage-indicator-bar-circle'
          >
            {active.includes(item) && (
              <span className='checkout-stage-indicator-bar-circle-active'></span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StageIndicator;
