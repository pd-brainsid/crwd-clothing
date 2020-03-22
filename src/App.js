import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Route path="/" component={HomePage} exact />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;

// 70
