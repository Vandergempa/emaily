import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { connect } from 'react-redux'
import { handleToken } from '../actions/authActions'

class StripeBilling extends Component {

  render() {
    const { description, amount, name } = this.props;
    return (
      <StripeCheckout
        // the amount has to be inputted in CENTS!
        amount={amount}
        description={description}
        name={name}
        stripeKey={process.env.REACT_APP_STRIPE_KEY || process.env.STRIPE_PUBLISHABLE_KEY}
        // Stripe sends back a token representing the charge. token={} is a callback function that
        // gets called with the token we receive from Stripe
        token={token => this.props.handleToken(token, description, amount)}
      >
        <button className="btn btn-primary paybutton"
        >
          Add credits
        </button>
      </StripeCheckout>
    )
  }
}

// Another way of doing is to import * as actions from '../actions' and then instead of
// mapDispatchToProps we can write actions.

const mapDispatchToProps = (dispatch, props) => {
  return {
    handleToken: (token, description, amount) => dispatch(handleToken(token, description, amount))
  }
}

export default connect(null, mapDispatchToProps)(StripeBilling)