import BillingAddress from './BillingAddress/BillingAddress.component';
import './Checkout.styles.scss';
import ShippingAddress from './ShippingAddress/ShippingAddress.component';
import StageIndicator from './StageIndicator/StageIndicator.component';

const Checkout = () => {
  return (
    <div className='checkout-contacts'>
      <StageIndicator active={['Shipping']} />
      <ShippingAddress />
      <BillingAddress />
    </div>
  );
};

export default Checkout;
