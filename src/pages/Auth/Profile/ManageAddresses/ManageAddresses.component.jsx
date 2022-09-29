import UserAccountItemCard from '../../../../components/UserAccountItemCard/UserAccountItemCard.component';
import { ReactComponent as PlusIcon } from '../../../../assets/plus.svg';
import { Link } from 'react-router-dom';
import './ManageAddresses.styles.scss';

const ManageAddresses = () => {
  return (
    <UserAccountItemCard title='Manage Addresses'>
      <div className='manage-addresess'>
        <Link
          to='/account/en/addresses/new'
          className='manage-addresess-content'
        >
          <PlusIcon className='manage-addresess-content-plus-icon' />
          <p className='manage-addresess-content-text'>Add an address</p>
        </Link>
      </div>
    </UserAccountItemCard>
  );
};

export default ManageAddresses;
