import { useState } from 'react';
import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './TotalAndPayment.styles.scss';

const TotalTitle = ({ value }) => {
  return (
    <div className='total-title'>
      <p className='total-title-header'>Total</p>
      <p className='total-title-value'>
        {value.toLocaleString('en-ng', {
          style: 'currency',
          currency: 'NGN',
          minimumFractionDigits: 0,
        })}
      </p>
    </div>
  );
};

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
        <UserAccountItemCard title={<TotalTitle value={45254} />} />
      </div>

      {/* handles payments */}
      <div className='total-and-payment-column-two'></div>
    </div>
  );
};

export default TotalAndPayment;
