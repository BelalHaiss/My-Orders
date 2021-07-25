import React, { Fragment } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import OrderState from './components/context/orderState';
import './components/Styles/sass/main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
function App() {
  return (
    <OrderState>
      <Router>
        <Fragment>
          <Navbar />
          <div className=' mt-3'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </OrderState>
  );
}

export default App;
