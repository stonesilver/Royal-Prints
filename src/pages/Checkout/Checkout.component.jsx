import './Checkout.styles.scss';
import StageIndicator from './StageIndicator/StageIndicator.component';

const Checkout = () => {
  return (
    <div className='checkout-contacts'>
      <StageIndicator active='Shipping' />
    </div>
  );
};

export default Checkout;
