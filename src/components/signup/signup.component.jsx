import React from 'react';
import './signup.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    };
  }

  handleChange = event => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {email, password, passwordConfirmation, displayName} = this.state;
    if (password != passwordConfirmation) {
      console.log('Passwords is not matchd');
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user, {displayName});
      this.setState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {displayName, email, password, passwordConfirmation} = this.state;
    return (
      <div className="signup">
        <h2 className="title">I don't have an account</h2>
        <span>Create a new account with your Email and Password</span>
        <div className="signup-form">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="displayName"
              type="text"
              value={displayName}
              onChange={this.handleChange}
              label="display name"
              required
            />
            <FormInput
              name="email"
              type="text"
              value={email}
              onChange={this.handleChange}
              label="email"
              required
            />
            <FormInput
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              label="password"
              required
            />
            <FormInput
              name="passwordConfirmation"
              type="password"
              value={passwordConfirmation}
              onChange={this.handleChange}
              label="password confirmation"
              required
            />
            <CustomButton type="submit">Register</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
