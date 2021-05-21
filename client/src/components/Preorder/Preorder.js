import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../Navbar';


class Preorder extends Component {

  renderView() {
    return (
      <>
      <div>
       <h1>Pre Order Page</h1>
      </div>
      <Navbar />
      </>
    );
}

  render(){
    return(
      <>
        {this.renderView()}
      </>
    )
  }
}

export default Preorder