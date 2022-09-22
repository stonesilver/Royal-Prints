import './Account.styles.scss';

const contentRow = ['Waiting acceptation', 'In Preparation', 'In Transit'];

const Account = () => {
  return (
    <div className='user-account'>
      <p className='user-account-header'>Current purchases</p>
      {contentRow.map((item) => (
        <div key={item} className='user-account-items-row'>
          <p className='content-link'>{item}</p>
          <p className='content-link-count'>0</p>
        </div>
      ))}
    </div>
  );
};

export default Account;
