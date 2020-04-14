import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, inverted, ...props}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-signin' : ''
    } custom-button`}
    {...props}>
    {children}
  </button>
);

export default CustomButton;
