import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => <h1>This is the Hats Page</h1>;

function App() {
  return (
    <div>
      <Route path="/" component={HomePage} exact />
      <Route path="/shop/hats" component={HatsPage} exact />
    </div>
  );
}

export default App;

// 67
