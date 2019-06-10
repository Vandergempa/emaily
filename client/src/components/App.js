import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/authActions';

import AppRouter from '../routers/AppRouter'

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

const mapStateToProps = (state, props) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchUser: () => dispatch(fetchUser())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);