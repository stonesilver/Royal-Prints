import { useState } from 'react';
import FlexHeader from '../../../../components/base/FlexedHeader/FlexedHeader.component';
import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './TotalAndPayment.styles.scss';

const TotalAndPayment = () => {
  const [state, setState] = useState({
    couponCode: '',
    cardNumber: '',
    expiryDate: '',
    code: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevS) => ({ ...prevS, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(state));
  };

  return (
    <div className='total-and-payment'>
      {/* coupons and order details */}
      <div className='total-and-payment-column-one'>
        <UserAccountItemCard
          title={<FlexHeader header='Total' value='₦45,254' />}
        >
          <div className='total-and-payment-column-one-total'>
            <p className='total-and-payment-column-one-total-coupon-label'>
              Have a coupon ? Enter the code below and click "ok"
            </p>
            <div className='total-and-payment-column-one-total-coupon'>
              <input
                type='text'
                name='couponCode'
                value={state.couponCode}
                onChange={handleChange}
                className='total-and-payment-column-one-total-coupon-input'
              />
              <button className='total-and-payment-column-one-total-coupon-ok-btn'>
                ok
              </button>
            </div>
            
            <div className='total-and-payment-column-one-order-detail'>
              <p className='total-and-payment-column-one-order-detail-label'>
                Sub-total
              </p>
              <p className='total-and-payment-column-one-order-detail-value'>
                ₦45,254
              </p>
            </div>
            <div className='total-and-payment-column-one-order-detail'>
              <p className='total-and-payment-column-one-order-detail-label'>
                Shipping fees
              </p>
              <p className='total-and-payment-column-one-order-detail-value'>
                ₦0.0
              </p>
            </div>
          </div>
        </UserAccountItemCard>
      </div>
      {/* handles payments */}
      <div className='total-and-payment-column-two'></div>
    </div>
  );
};

export default TotalAndPayment;
