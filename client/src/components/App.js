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
    // If the user is logged in, don't let the user end up on the landing page.
    if (history.location.pathname === '/' && (this.props.auth)) {
      history.push('/surveys')
    }
  }

  render() {
    return (
      <div>
        <AppRouter />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchUser: () => dispatch(fetchUser()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);