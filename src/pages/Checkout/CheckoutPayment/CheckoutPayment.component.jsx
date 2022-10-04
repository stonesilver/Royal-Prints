import StageIndicator from '../StageIndicator/StageIndicator.component';
import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './CheckoutPayment.styles.scss';

const CheckoutPayment = () => {
  return (
    <div className='checkout-payment'>
      <StageIndicator active={['Shipping', 'Payment']} />
    </div>
  );
};

export default CheckoutPayment;
