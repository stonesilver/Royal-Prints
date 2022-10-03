import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './ShippingAddress.styles.scss';

const ShippingAddress = () => {
  return (
    <UserAccountItemCard title='Shipping Address'>
      <div className='checkout-shipping-address'>
        <div className="checkout-shipping-address-contact"></div>
        <div className="checkout-shipping-address-address"></div>
      </div>
    </UserAccountItemCard>
  );
};

export default ShippingAddress;
