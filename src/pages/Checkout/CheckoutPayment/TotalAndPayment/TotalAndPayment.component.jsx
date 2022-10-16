import { useState } from 'react';
import FlexHeader from 'components/base/FlexedHeader/FlexedHeader.component';
import UserAccountItemCard from 'components/UserAccountItemCard/UserAccountItemCard.component';
import Radio from 'components/base/Radio/Radio.component';
import FormInputTitle from 'components/base/FormInputTitle/FormInputTitle.component';
import Input from 'components/base/Input/Input.component';
import CheckBox from 'components/base/CheckBox/CheckBox.component';
import SubmitBtn from 'components/base/SubmitBtn/SubmitBtn.component';
import { ReactComponent as LockIcon } from 'assets/lock.svg';
import { ReactComponent as ArrowClockWiseIcon } from 'assets/clockwise.svg';
import DesignerImg from 'assets/imgFiles/styles/54.jpg';
import './TotalAndPayment.styles.scss';

const card = [
  {
    icon: <LockIcon className='payment-secure-money-back-card-icon' />,
    title: 'Payment 100% secured',
    sub: 'Your payment is secured with the strongest finance protocols',
  },
  {
    icon: (
      <ArrowClockWiseIcon className='payment-secure-money-back-card-icon' />
    ),
    title: 'Money back guarantee',
    sub: 'We guarantee your money back if you are not satisfied',
  },
];

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
            <SubmitBtn>Pay {`₦${state.paymentAmount}`}</SubmitBtn>
          </div>
        </div>
      </form>
      <div className='horizontal-line'>
        <p className='horizontal-line-text'>
          <LockIcon className='lock-icon' /> Payment 100% secured
        </p>
      </div>
      <UserAccountItemCard title='Rolloyds'>
        <div className='order-detail'>
          <div className='order-detail-image'>
            <img
              src={DesignerImg}
              alt='designer'
              className='order-detail-image-designer-img'
            />
            <div className='order-detail-image-details'>
              <p className='order-detail-image-details-name'>
                Classic Gentleman 2 Piece Kaftan
              </p>
              <p className='order-detail-image-details-size'>L - Men</p>
            </div>
          </div>
          <div className='order-detail-amount'>
            <p className='order-detail-amount-total-amount'>₦50,525</p>
            <p className='order-detail-amount-quantity'>1 X ₦50,525</p>
            <p className='order-detail-amount-free-shipping'>
              Shipping: 5 days - Free
            </p>
          </div>
        </div>
      </UserAccountItemCard>
      <div className='sub-total-total-fee'>
        <div className='sub-total-total-fee-sub-total list-item'>
          <p className='title'>Sub Total</p>
          <p className='title'>₦50,525</p>
        </div>
        <div className='sub-total-total-fee-shipping list-item'>
          <p className='title'>Shipping</p>
          <p className='title'>₦0</p>
        </div>
        <div className='sub-total-total-fee-total list-item'>
          <p className='title'>Total</p>
          <p className='title total-price'>₦50,525</p>
        </div>
      </div>

      <div className='payment-secure-money-back'>
        {card.map(({ icon, title, sub }) => (
          <div key={title} className='payment-secure-money-back-card'>
            {icon}
            <div className='payment-secure-money-back-card-body'>
              <p className='payment-secure-money-back-card-body-header'>
                {title}
              </p>
              <p className='payment-secure-money-back-card-body-sub'>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalAndPayment;
