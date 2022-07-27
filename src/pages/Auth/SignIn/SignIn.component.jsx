import { useState } from 'react';
import Input from '../../../components/base/Input/Input.component';
import SubmitBtn from '../../../components/base/SubmitBtn/SubmitBtn.component';
import './SignIn.styles.scss';

const initState = {
  email: '',
  password: '',
};

const SignIn = () => {
  const [userInput, setUserInput] = useState(initState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevS) => ({
      ...prevS,
      [name]: value,
    }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    alert('Submitted!!!');
  };

  return (
    <div className='sign-in'>
      <div className='sign-in-container'>
        <h3 className='sign-in-container-header'>Welcome back 👋</h3>
        <p className='sign-in-container-sign-in'>Sign in</p>
        <p className='sign-in-container-desc'>
          Enter your email and password below to sign in.
        </p>
        <form onSubmit={HandleSubmit}>
          <div className='sign-in-container-email group-input'>
            <Input
              type='email'
              label='Email'
              value={userInput.email}
              placeHolder='Enter your email'
              handleChange={handleChange}
            />
          </div>
          <div className='sign-in-container-pwd group-input'>
            <Input
              type='password'
              label='Password'
              value={userInput.password}
              placeHolder='Enter your password'
              handleChange={handleChange}
            />
          </div>
          <div className='sign-in-container-forgot-pwd'>
            <p className='text'>Forgot Password?</p>
          </div>
          <div className='sign-in-container-submit-btn'>
            <SubmitBtn>Sign in</SubmitBtn>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
