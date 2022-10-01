import { ReactComponent as HistoryIcon } from '../../../assets/svg/history.svg';
import { ReactComponent as WithdrawIcon } from '../../../assets/svg/arrow-left-right.svg';
import { ReactComponent as CashNoteIcon } from '../../../assets/svg/cash-banknote.svg';
import { Link } from 'react-router-dom';
import './Wallet.styles.scss';
import UserAccountItemCard from '../../../components/UserAccountItemCard/UserAccountItemCard.component';

const className = 'user-wallet-link-cards-card-column-icon';

const LinkItems = [
  { name: 'History', icon: <HistoryIcon className={className} /> },
  { name: 'Withdraw', icon: <WithdrawIcon className={className} /> },
  { name: 'Deposit', icon: <CashNoteIcon className={className} /> },
];

const Wallet = () => {
  return (
    <div className='user-wallet'>
      <div className='user-wallet-header-bal'>
        <p className='user-wallet-header-bal-header'>Wallet</p>
        <p className='user-wallet-header-bal-balance'>
          balance:{' '}
          <span className='user-wallet-header-bal-balance-amount'>$0</span>
        </p>
      </div>

      {/* Link cards */}
      <div className='user-wallet-link-cards'>
        {LinkItems.map(({ name, icon }) => (
          <Link
            key={name}
            className='user-wallet-link-cards-card-column'
            to='/account/en/wallet'
          >
            {icon}
            <p className={`user-wallet-link-cards-card-column-text ${name}`}>
              {name}
            </p>
          </Link>
        ))}
      </div>

      {/* Transaction details */}
      <UserAccountItemCard title=''>
        <div className='user-wallet-transaction-details'>
          <p className='user-wallet-transaction-details-column-one'>0</p>
          <p className='user-wallet-transaction-details-column-two'>
            Transactions
          </p>
          <p className='user-wallet-transaction-details-column-three'>Date</p>
          <p className='user-wallet-transaction-details-column-four'>Amount</p>
          <p className='user-wallet-transaction-details-column-five'>Balance</p>
        </div>
      </UserAccountItemCard>
    </div>
  );
};

export default Wallet;
