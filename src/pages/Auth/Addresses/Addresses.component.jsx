import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './Addresses.styles.scss';

const Addresses = () => {
  return (
    <UserAccountItemCard title='Addresses / New Address'>
      <div className='user-addresses'>
        <p className='user-addresses-title user-addresses-important'>
          ADDRESS NAME (E.G. HOME)
        </p>
      </div>
    </UserAccountItemCard>
  );
};

export default Addresses;
