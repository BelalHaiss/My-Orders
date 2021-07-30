import React, { Fragment, useEffect, useContext } from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import OrderState from './components/context/orderState';
import './components/Styles/sass/main.scss';
import Login from './components/auth/Login';
import Alerts from './components/layouts/Alerts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Register from './components/auth/Register';
import AlertState from './components/context/alertContext/AlertState';
import authContext from './components/context/Auth/authContext';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  const auth = useContext(authContext);
  useEffect(() => {
    auth.isLoginUser();
    // eslint-disable-next-line
  }, []);

  return (
    <OrderState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <div className=' mt-3'>
              <div className='container'>
                <Alerts />
                <Switch>
                  <PrivateRoute exact path='/' component={Home} />
                  <Route exact path='/about' component={About} />
                  <Route exact path='/Login' component={Login} />
                  <Route exact path='/Register' component={Register} />
                </Switch>
              </div>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </OrderState>
  );
}

export default App;
