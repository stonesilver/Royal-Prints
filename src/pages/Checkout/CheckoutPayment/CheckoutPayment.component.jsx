import StageIndicator from '../StageIndicator/StageIndicator.component';
import './CheckoutPayment.styles.scss';
import TotalAndPayment from './TotalAndPayment/TotalAndPayment.component';

const CheckoutPayment = () => {
  return (
    <div className='checkout-payment'>
      <StageIndicator active={['Shipping', 'Payment']} />
      <TotalAndPayment />
    </div>
  );
};

export default CheckoutPayment;
