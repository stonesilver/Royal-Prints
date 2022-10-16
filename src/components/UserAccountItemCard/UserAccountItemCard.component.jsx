import './UserAccountItemCard.styles.scss';

const UserAccountItemCard = ({ title, children }) => {
  return (
    <div className='user-account-item-card'>
      <div className='user-account-item-card-title'>{title}</div>
      <div className='user-account-item-card-children'>{children}</div>
    </div>
  );
};

export default UserAccountItemCard;
