import './SignUp.styles.scss';

const SignUp = () => {
  return (
    <div className='sign-up'>
      <div className='sign-up-container'>
        <div className='sign-up-container-left-column'>
          <h1 className='sign-up-container-left-column-header'>Sign Up</h1>
          <div className='sign-up-container-left-column-description'>
            <p className='text-1'>
              Coronation is much better when you have an account.
            </p>
            <p className='text-2'>Get yourself one</p>
          </div>
        </div>
        <div className='sign-up-container-right-column'></div>
      </div>
    </div>
  );
};

export default SignUp;
