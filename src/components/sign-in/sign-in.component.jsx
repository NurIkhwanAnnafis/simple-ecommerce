import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-in.style.scss';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

const SignIn = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = credentials;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({ email: '', password: '' });
    } catch (error) {
      console.log(error)
    }

  }

  const handleChange = event => {
    const { value, name } = event.target;

    setCredentials({ ...credentials, [name]: value });
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput 
          name="email"
          type="email"
          value={credentials.email}
          required
          handleChange={handleChange}
          label="email"
        />

        <FormInput 
          name="password"
          type="password"
          value={credentials.password}
          required
          handleChange={handleChange}
          label="password"
        />

        <div className='buttons'>
          <CustomButton type="submit">
            SIGN IN
          </CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={signInWithGoogle}>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn;