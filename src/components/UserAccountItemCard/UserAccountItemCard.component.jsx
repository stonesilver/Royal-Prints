import './UserAccountItemCard.styles.scss';

const UserAccountItemCard = ({ title, children }) => {
  return (
    <div className='user-account-item-card'>
      <p className='user-account-item-card-title'>{title}</p>
      <div className='user-account-item-card-children'>{children}</div>
    </div>
  );
};

export default UserAccountItemCard;
