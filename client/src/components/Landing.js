import React from 'react'
import M from 'materialize-css';

class Landing extends React.Component {

  componentDidMount() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems);
  }

  render() {
    return (
      <div>
        <div className="slider fullscreen">
          <ul className="slides font">
            <li>
              <img alt="mailboxes" src="images/email2.jpg"></img>
              <div className="caption center-align">
                <h1 className="bold font-size1">Emaily</h1>
                <h2 className="thin grey-text text-lighten-3">Create and send out personalized email surveys</h2>
              </div>
            </li>
            <li className='image1'>
              <div className="caption right-align">
                <h2>Turn data into insights</h2>
                <h4 className="light italic">Analyze the feedback from your clients</h4>
              </div>
            </li>
            <li className='image2'>
              <div className="caption left-align">
                <h2>Reach out to your clients in an orderly fashion</h2>
                <h4 className="light italic">Organize your campaigns and feedbacks</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Landing