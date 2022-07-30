import { useState, useEffect, useCallback } from 'react';
import Input from '../../../components/base/Input/Input.component';
import SubmitBtn from '../../../components/base/SubmitBtn/SubmitBtn.component';
import { useNavigate } from 'react-router-dom';
import './SignIn.styles.scss';

const SignIn = () => {
  const navigate = useNavigate();

  const initState = {
    email: '',
    password: '',
  };

  const [userInput, setUserInput] = useState(initState);

  const [error, setError] = useState(initState);

  const [validateStart, setValidateStart] = useState(false);

  const validateBeforeSubmit = new Promise((resolve, reject) => {
    const re = /\S+@\S+\.\S+/;
    const isEmail = re.test(userInput.email);
    const isPasswordGTEight = userInput.password.length > 7;
    isEmail && isPasswordGTEight ? resolve() : reject();
  });

  const validateInputs = useCallback(() => {
    // regex for email
    const re = /\S+@\S+\.\S+/;
    const isEmail = re.test(userInput.email);

    //   checking if email is valid
    if (!isEmail) {
      setError((prevS) => ({
        ...prevS,
        email: 'Enter a valid email',
      }));
    } else {
      setError((prevS) => ({
        ...prevS,
        email: '',
      }));
    }

    //   checking if password is up to 8 characters
    if (userInput.password.length < 8) {
      setError((prevS) => ({
        ...prevS,
        password: 'Password should be at least 8 charaters',
      }));
    } else {
      setError((prevS) => ({
        ...prevS,
        password: '',
      }));
    }
  }, [userInput.email, userInput.password.length]);

  useEffect(() => {
    if (validateStart) {
      validateInputs();
    }
  }, [validateStart, validateInputs]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInput((prevS) => ({
      ...prevS,
      [name]: value,
    }));
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    setValidateStart(true);

    validateBeforeSubmit.then(() => navigate('/'));
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
              name='email'
              value={userInput.email}
              placeHolder='Enter your email'
              handleChange={handleChange}
              error={error.email}
            />
          </div>
          <div className='sign-in-container-pwd group-input'>
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
