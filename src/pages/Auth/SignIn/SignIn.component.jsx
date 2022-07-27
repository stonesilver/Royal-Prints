import Input from '../../../components/base/Input/Input.component';
import SubmitBtn from '../../../components/base/SubmitBtn/SubmitBtn.component';
import './SignIn.styles.scss';

const SignIn = () => {
  return (
    <div className='sign-in'>
      <div className='sign-in-container'>
        <h3 className='sign-in-container-header'>Welcome back 👋</h3>
        <p className='sign-in-container-sign-in'>Sign in</p>
        <p className='sign-in-container-desc'>
          Enter your email and password below to sign in.
        </p>
        <div className='sign-in-container-email group-input'>
          <Input type='text' label='Email' />
        </div>
        <div className='sign-in-container-pwd group-input'>
          <Input type='password' label='Password' />
        </div>
        <div className='sign-in-container-forgot-pwd'>
          <p className='text'>Forgot Password?</p>
        </div>
        <div className='sign-in-container-submit-btn'>
          <SubmitBtn />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
