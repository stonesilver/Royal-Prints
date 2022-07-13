import SellerInfo from './SellerInfo';
import ImagesAndDetails from './ImagesAndDetails/ImagesAndDetails.component';
import DescriptionReviewShippingAccordion from './DescriptionReviewShippingAccordion/DescriptionReviewShippingAccordion.component';
import './index.styles.scss';

const detail = [
  { Color: 'Blue' },
  { Range: 'Petite, Plus Size and Curves' },
  { Style: 'Casual, Sexy Clothes' },
  { Fabric: 'None' },
  { Gender: 'For Him' },
  { Material: 'Cashmere, Cloth' },
  { Occasion: 'The beautiful days, Wedding and ceremony' },
];

const deliveryDelay = [
  'Australia from 5 to 11 days.',
  'Nigeria from 3 to 9 days.',
  'Martinique from 5 to 11 days.',
  'French Guiana from 8 to 14 days.',
  'France from 5 to 11 days.',
  'United States from 5 to 11 days.',
  'Guadeloupe from 5 to 11 days.',
  'Africa from 5 to 11 days.',
  'International from 10 to 16 days.',
];

const RefundsAndExchanges = [
  'Money back guaranteed 15 days after reception.',
  'Weared and personalized items will not be exchanged or refunded.',
  'Return shipping fees are at your charge and not refunded.',
  'Refunds are made on your Afrikrea virtual wallet. You can use the credit to buy another product or transfer the amount to your bank account.',
];

const condition = ['New item.', 'Customizable and made to order.'];

const ListComponent = ({ header, list }) => {
  return (
    <div className='list-component'>
      <h3 className='list-component-header'>{header}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const ProductDetails = () => {
  return (
    <div className='product-detail'>
      <SellerInfo />
      <ImagesAndDetails />
      <DescriptionReviewShippingAccordion initState={true} header='Description'>
        <p>
          This elegant outfit is handmade and designed with high quality
          material. It is suitable for all kinds of occasion and comes with a
          matching pant with a draw string for wearers ease.
        </p>
        <p>
          For custom orders, please provide the following measurement details
        </p>
        <p>
          Chest
          <br />
          Shoulder
          <br />
          Waist
          <br />
          NeckCrouch length
          <br />
          Shirt
          <br />
          length
          <br />
          Pant
          <br />
          length
        </p>
        <p>My standard measurement chart is listed below</p>
        <p>
          Xs
          <br />
          Neck: 13-13.5
          <br />
          Chest: 33-34
          <br />
          Sleeve: 31.5-32
          <br />
          Waist: 27-28
        </p>
        <p>
          S<br />
          Neck: 14-14.5
          <br />
          Chest: 35-37
          <br />
          Sleeve: 32.5-33
          <br />
          Waist: 29-31
        </p>
        <p>
          M<br />
          Neck: 15-15.5
          <br />
          Chest: 38-40
          <br />
          Sleeve: 33.5-34
          <br />
          Waist: 32-34
        </p>
        <p>
          L<br /> Neck: 16-16.5
          <br />
          Chest: 42-44
          <br />
          Sleeve: 34.5-35
          <br />
          Waist: 36-38
        </p>
        <p>
          XL <br /> Neck: 17-17.5
          <br />
          Chest: 46-48
          <br />
          Sleeve: 35.5-36
          <br />
          Waist: 40-42
        </p>
        <p>
          XXL
          <br />
          Neck: 18-18.5
          <br />
          Chest: 5-52
          <br />
          Sleeve: 36-36.5
          <br />
          Waist: 44-46
        </p>
        <p>
          Please feel free to start a conversation for further enquiries. I hope
          you have a pleasurable shopping experience.
        </p>
        <div className='cloth-detail'>
          {detail.map((item, index) => (
            <div className='cloth-detail-row'>
              <span className='cloth-detail-row-key'>{Object.keys(item)}:</span>
              <span className='cloth-detail-row-value'>
                {Object.values(item)}
              </span>
            </div>
          ))}
        </div>

        <ListComponent header='DELIVERY DELAY' list={deliveryDelay} />
        <ListComponent
          header='REFUNDS AND EXCHANGES'
          list={RefundsAndExchanges}
        />
        <ListComponent header='CONDITION' list={condition} />
      </DescriptionReviewShippingAccordion>

      <DescriptionReviewShippingAccordion initState={false} header='Reviews'>
        <p>Test</p>
      </DescriptionReviewShippingAccordion>

      <DescriptionReviewShippingAccordion initState={false} header='Shipping'>
        <p>Test</p>
      </DescriptionReviewShippingAccordion>
    </div>
  );
};

export default ProductDetails;
