import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import M from 'materialize-css';

import Header from './Header'
import SurveyList from './surveys/SurveyList'

let instance = null

class Dashboard extends React.Component {

  // We make use of localstorage here, so the feature discovery only shows up upon first login for
  // newbie users
  componentDidMount() {
    const elems = document.querySelector('.tap-target');
    M.TapTarget.init(elems);
    instance = M.TapTarget.getInstance(elems);
    if (!this.props.surveys.length) {
      instance.open();
      setTimeout(() => instance.close(), 3000)
    }
  }

  render() {
    return (
      <div className="">
        <Header />
        <div className="featuredisc">
          <a
            id="menu"
            className="btn-floating btn-large waves-effect waves-light disccolor pulse"
            onClick={() => { instance.open() }}>
            <i className="material-icons">blur_on
          </i>
          </a>
          <div className="tap-target" data-target="menu">
            <div className="tap-target-content">
              <h4>Welcome!</h4>
              <p>Your own personal campaign manager awaits you! Start by buying credits. The payment method is in test mode, please use credit card number: 4242-4242-4242-4242 for payments.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <SurveyList />
          <div className="fixed-action-btn container">
            <Link to="/surveys/new" className="btn-floating btn-large right waves-effect waves-light green darken-2 pulse">
              <i className="material-icons">add</i>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    surveys: state.surveys
  }
}


export default connect(mapStateToProps)(Dashboard)