import React from 'react'
import { Link } from 'react-router-dom'

const Thankyou = () => {

  return (
    <div className="flex">
      <i className="mailicon mailicon material-icons green-text">email</i>
      <h1 className="thankyoutitle">Thank you!</h1>
      <i className="doneicon material-icons green-text">done</i>
      <h3 className="thankyousubtitle">Believe or not, your feedback matters a lot to us. Should you be interested in our services, please check on us:</h3>
      <Link to="/">
        <a class="waves-effect waves-light btn-large green"><i class="material-icons left">email</i>Discover</a>
      </Link>
    </div>
  )
}

export default Thankyou