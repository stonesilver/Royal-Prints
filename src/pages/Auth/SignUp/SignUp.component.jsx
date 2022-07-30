import { useState } from 'react';
import Input from '../../../components/base/Input/Input.component';
import SubmitBtn from '../../../components/base/SubmitBtn/SubmitBtn.component';
import { Link } from 'react-router-dom';
import './SignUp.styles.scss';

const SignUp = () => {
  const initState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAndConditions: false,
  };

  const [userInput, setUserInput] = useState(initState);

  const [error, setError] = useState(initState);

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === 'checkbox') {
      setUserInput((prevS) => ({
        ...prevS,
        termsAndConditions: !prevS.termsAndConditions,
      }));
    } else {
      setUserInput((prevS) => ({
        ...prevS,
        [name]: value,
      }));
    }
  };

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
        <form
          onSubmit={() => console.log('Submitted!!!')}
          className='sign-up-container-right-column'
        >
          <div className='mobile-header'>
            <h2>Sign Up</h2>
            <p className='desc'>
              Coronation is much better when you have an account. Get yourself
              one
            </p>
          </div>

          <div className='form-input form-username'>
            <Input
              type='text'
              label='Username'
              name='username'
              value={userInput.username}
              placeHolder='Enter your username'
              handleChange={handleChange}
              error={error.username}
            />
          </div>
          <div className='form-input form-email'>
            <Input
              type='email'
              label='Email'
              name='email'
              value={userInput.email}
              placeHolder='Enter your email'
              handleChange={handleChange}
              error={error.email}
            />
          </div>
          <div className='form-input form-password'>
            <Input
              type='password'
              label='Password'
              name='password'
              value={userInput.password}
              placeHolder='Enter your password'
              handleChange={handleChange}
              error={error.password}
            />
          </div>
          <div className='form-input form-confirm-password'>
            <Input
              type='password'
              label='confirm password'
              name='confirmPassword'
              value={userInput.confirmPassword}
              placeHolder='confirm password'
              handleChange={handleChange}
              error={error.confirmPassword}
            />
          </div>
          <div className='form-input terms-and-conditions'>
            <label htmlFor='termsAndConditions' id='termsAndConditions'>
              <input
                type='checkbox'
                name='termsAndConditions'
                checked={userInput.termsAndConditions}
                onChange={handleChange}
                className='TAndC'
              />
              By signing up i agree with coronation terms and conditions
            </label>
          </div>
          <div className='submit-btn-and-login-link'>
            <div className='submit'>
              <SubmitBtn>Sign up</SubmitBtn>
            </div>
            OR
            <Link to='/auth/sign-in' className='login'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
