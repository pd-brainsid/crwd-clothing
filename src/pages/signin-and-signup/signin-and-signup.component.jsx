import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import './signin-and-signup.styles.scss';

const SignInUp = () => (
  <div className="sign-forms">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInUp;
