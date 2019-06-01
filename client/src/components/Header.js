import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { signOut } from '../actions/authActions'
import StripeBilling from './StripeBilling'

class Header extends Component {
  renderContent() {
    switch (this.props.auth.user) {
      case null:
        return;
      case false:
        return <li><a className="valign-wrapper" href="/auth/google">Login With <span><i className="fab fa-google login"></i></span></a></li>;
      default:
        return [
          <li key="1" className="paybutton">
            <StripeBilling
              amount={100}
              description="Pay $1 for 5 survey credits"
              name="Emaily"
            />
          </li>,
          <li key="3" className="credits">
            Credits: {this.props.auth.user.credits}
          </li>,
          <li key="2"><a onClick={this.props.signOut} >Logout</a></li>
        ]
    }
  }

  render() {
    return (
      <div className='navbar-fixed font'>
        <nav>
          <div className="nav-wrapper green lighten-1">
            <Link
              to={this.props.auth.user ? '/surveys' : '/'}
              className="left brand-logo logo"
            >
              Emaily
            </Link>
            <ul id="nav-mobile" className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
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
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)