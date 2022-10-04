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
          title={<FlexHeader header='Total' value='₦45,254' />}>
            
          </UserAccountItemCard>
      </div>
      {/* handles payments */}
      <div className='total-and-payment-column-two'></div>
    </div>
  );
};

export default TotalAndPayment;
