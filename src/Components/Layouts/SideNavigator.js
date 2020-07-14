import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

let status = 'side on';

class SideNavigator extends Component {
  constructor(props) {
    super(props);
  }

  closeNav = () => {
    status = 'side';
    this.props.changer();
  };

  render() {
    status = this.props.status;
    return (
      <div className={status}>
        <a href='#' className='close-side' onClick={() => this.closeNav()}>
          <i className='fa fa-times'></i>
        </a>
        <div className='wideget'>
          <h6 className='title'>Menu</h6>
          <ul id='menu' className='link'>
            <li>
              {/* <Link
                to={{
                  pathname: '/mealdetails',
                  mealDetails: {
                    name: 'Shack Burger',
                  },
                }}
              > */}
              Shack Burger
              {/* </Link> */}
            </li>
            <li>Signature Burger</li>
            <li>Classic Burger</li>
            <li>Original Burger</li>
            <li>Cheddar Chunky</li>
            <li id='close-buttom'>
              <Link to='/'>
                <h5>Return to Home page</h5>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(SideNavigator);
