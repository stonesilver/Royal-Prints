import { useState } from 'react';
import FlexHeader from 'components/base/FlexedHeader/FlexedHeader.component';
import UserAccountItemCard from 'components/UserAccountItemCard/UserAccountItemCard.component';
import Radio from 'components/base/Radio/Radio.component';
import FormInputTitle from 'components/base/FormInputTitle/FormInputTitle.component';
import Input from 'components/base/Input/Input.component';
import CheckBox from 'components/base/CheckBox/CheckBox.component';
import SubmitBtn from 'components/base/SubmitBtn/SubmitBtn.component';
import './TotalAndPayment.styles.scss';

const TotalAndPayment = () => {
  const [state, setState] = useState({
    couponCode: '',
    cardNumber: '',
    expiryDate: '',
    code: '',
    paymentAmount: '50,525',
    acceptTerms: false,
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
    <div className='total-and-payment-container'>
      <form className='total-and-payment' onSubmit={handleSubmit}>
        {/* coupons and order details */}
        <div className='total-and-payment-column-one'>
          <UserAccountItemCard
            title={<FlexHeader header='Total' value='₦45,254' />}
          >
            <div className='total-and-payment-column-one-total'>
              <label className='total-and-payment-column-one-total-coupon-label'>
                Have a coupon ? Enter the code below and click "ok"
              </label>
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

          <UserAccountItemCard
            title={<FlexHeader header='Ship To' value='Edit' />}
          >
            <div className='total-and-payment-column-one-ship-to'>
              <p className='total-and-payment-column-one-ship-to-name'>
                chigozie ezenwa
              </p>
              <p>4 desmond madumere crescent</p>
              <p>102103 lagos</p>
              <p>Nigeria</p>
              <p>+234 706 437 8577</p>
            </div>
          </UserAccountItemCard>
        </div>
        {/* handles payments */}
        <div className='total-and-payment-column-two'>
          <FormInputTitle label='PAYMENT' important />
          <div className='total-and-payment-column-two-amount'>
            <Radio
              name='paymentAmount'
              checked={state.paymentAmount === '50,525'}
              onChange={handleChange}
              label='50,525'
            />
            <Radio
              name='paymentAmount'
              checked={state.paymentAmount === '3X 16,841'}
              onChange={handleChange}
              label='3X 16,841'
            />
          </div>
          <div className='total-and-payment-column-two-payment-info'>
            <div className='total-and-payment-column-two-payment-info-card-number'>
              <FormInputTitle label='CARD NUMBER' important />
              <Input
                type='number'
                name='cardNumber'
                value={state.cardNumber}
                handleChange={handleChange}
              />
            </div>
            <div className='total-and-payment-column-two-payment-info-row'>
              <div className='total-and-payment-column-two-payment-info-row-expiry'>
                <FormInputTitle label='EXPIRATION DATE' important />
                <Input
                  type='date'
                  name='expiryDate'
                  value={state.expiryDate}
                  handleChange={handleChange}
                />
              </div>
              <div className='total-and-payment-column-two-payment-info-row-code'>
                <FormInputTitle label='CODE' important />
                <Input
                  type='number'
                  name='code'
                  value={state.code}
                  handleChange={handleChange}
                />
              </div>
            </div>
          </div>
          <CheckBox
            name='acceptTerms'
            checked={state.acceptTerms}
            label='I accept the terms of service'
            onChange={() =>
              setState((prevS) => ({
                ...prevS,
                acceptTerms: !prevS.acceptTerms,
              }))
            }
            error={false}
          />
          <div className='total-and-payment-column-two-submit-btn'>
            <SubmitBtn>Pay {`#${state.paymentAmount}`}</SubmitBtn>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TotalAndPayment;
