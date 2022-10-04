import StageIndicator from '../StageIndicator/StageIndicator.component';
import ShippingAddress from './ShippingAddress/ShippingAddress.component';
import BillingAddress from './BillingAddress/BillingAddress.component';
import './CheckoutShipping.styles.scss';

const CheckoutShipping = () => {
  return (
    <div className='checkout-contacts'>
      <StageIndicator active={['Shipping']} />
      <ShippingAddress />
      <BillingAddress />
    </div>
  );
};

export default CheckoutShipping;
