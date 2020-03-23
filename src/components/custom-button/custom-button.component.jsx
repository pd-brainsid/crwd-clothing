import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...props}) => (
  <button
    className={`${isGoogleSignIn ? 'google-signin' : ''} custom-button`}
    {...props}>
    {children}
  </button>
);

export default CustomButton;
