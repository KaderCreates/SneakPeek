import React, { Component } from 'react';
import Navbar from '../Navbar';
import Box from '@material-ui/core/Box';


class About extends Component {

  render() {
    const style = {      
      p: {
        margin: 'auto',
        width: 555,
        lineHeight: 2,
        fontSize: '18px',
        paddingTop: '2rem'
      },
      div: {
        textAlign: 'center'
      }
    }

    return (
      <>
        <Navbar />
        <div>
          <div style={style.div}>
            <p style={style.p}>
              Sneakpeek is a MERN Stack mock e-commerce site for sneakers and showcases some of the most popular sneakers of all time. You can view each sneaker under the sneakers tab. Select your size and add it to your cart. You wil be able to checkout using a dummy credit card via Stripe. You can also sign up for our newsletter to be first to know when exclusives and preorders go live. You can sign up for an account to track your saved collection. If you have any questions or concerns, you can contact us at anytime in our contact page. 
              <br></br>
              Stay tuned for the drop!
          </p>
          </div>
        </div>
      </>
    );
  }
}

export default About