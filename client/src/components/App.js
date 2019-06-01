import React, { Component } from 'react'
import { createBrowserHistory } from 'history'
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/authActions';

import Header from './Header'
import Landing from './Landing'

export const history = createBrowserHistory();

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

const AppRouter = () => (
  // The component we put on top of the Routes will be visible all time!
  <div className="">
    <Router history={history}>
      <div>
        <Header />
        <Route path="/" component={Landing} exact={true} />
        <Route path="/surveys" component={Dashboard} exact={true} />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </Router>
  </div>
);

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <AppRouter />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  }
}


export default connect(null, mapDispatchToProps)(App);