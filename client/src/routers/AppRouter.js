import React from 'react';
import { createBrowserHistory } from 'history';
import Header from '../components/Header'
import Landing from '../components/Landing'
import Dashboard from '../components/Dashboard'
import SurveyNew from '../components/surveys/SurveyNew'
import Thankyou from '../components/Thankyou'
import { Router, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  // The component we put on top of the Routes will be visible all time!
  <div className="">
    <Router history={history}>
      <div>
        <PublicRoute path="/" component={Landing} exact={true} />
        <PrivateRoute path="/surveys" component={Dashboard} exact={true} />
        <PrivateRoute path="/surveys/new" component={SurveyNew} />
        <Route path="/thankyou" component={Thankyou} />
      </div>
    </Router>
  </div>
);

export default AppRouter;