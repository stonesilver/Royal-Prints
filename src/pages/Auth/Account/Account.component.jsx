import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';
import './Account.styles.scss';

const contentRow = ['Waiting acceptation', 'In Preparation', 'In Transit'];

const Account = () => {
  return (
    <UserAccountItemCard title='Current purchases'>
      {contentRow.map((item) => (
        <div key={item} className='user-account-items-row'>
          <p className='content-link'>{item}</p>
          <p className='content-link-count'>0</p>
        </div>
      ))}
    </UserAccountItemCard>
  );
};

export default Account;
