import DescriptionReviewShippingAccordion from '../DescriptionReviewShippingAccordion/DescriptionReviewShippingAccordion.component';
import { shippingDetails } from '../data';
import './Shipping.styles.scss';

const Shipping = () => {
  return (
    <DescriptionReviewShippingAccordion initState={false} header='Shipping'>
      <div className='shipping-content'>
        {shippingDetails.map((item, index) => (
          <div key={index} className='content-column'>
            <p className='column-heading'>
              {Object.keys(item).toString().replace('_', ' ')}
            </p>
            <p
              className='column-value'
              style={{
                color:
                  Object.values(item).toString() === 'Free' ? 'green' : 'black',
                fontWeight:
                  Object.values(item).toString() === 'Free' ? 600 : 'normal',
              }}
            >
              {Object.values(item)}
            </p>
          </div>
        ))}
      </div>
    </DescriptionReviewShippingAccordion>
  );
};

export default Shipping;
