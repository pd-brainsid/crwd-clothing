import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUp from './pages/signin-and-signup/signin-and-signup.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route path="/" comp onent={HomePage} exact />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

// 77
