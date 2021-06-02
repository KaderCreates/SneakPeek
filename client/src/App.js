import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import {Router, Route} from 'react-router-dom';
import history from './history';
import { IconButton, AppBar } from '@material-ui/core';
import Slideshow from './components/Slides/Slides';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Preorder from './components/Preorder';
import Sneakers from './components/Sneakers';
import Contact from './components/Contact';
import Home from './components/Home/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Product from './components/Product';
import Cart from './components/Product/components/Cart';
import { Link } from 'react-router-dom';
 window.eventsBus = new Event('poke');


 const styles = {
  title: {
    textAlign: 'center',
    fontSize: '25px',
    color: 'inherit',
    textDecoration: 'none',
  }
};


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      data: null,
      Role:"",
      IsLogged:false
    };

    this.UpdateLogInfo = this.UpdateLogInfo.bind(this)
  
  }


  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('https://sneakpeekmock.herokuapp.com/sneakpeek');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  UpdateLogInfo=(userRole,Valid)=> {
    this.setState({Role : userRole,IsLogged : Valid});
    console.log("state Update in App.js");
  };

  render() {
    
    
    return (

          <Router history={history}>   
          <div>
           <h1 style={styles.title}> <a style={styles.title} href='/'>SneakPeek </a></h1>
          <SideMenu />  
          <Cart />
            <Route exact path='/' component={Home}/>
            <Route path={'/preorders'} component={Preorder} />
            <Route path='/sneakers' component={Sneakers} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/product/:id' component={Product} />
            <Route path='/login' render={(props)=> <Login {...props} UpdateLogInfo={this.UpdateLogInfo} /> } /> 
            <Route path='/signup' render={(props) => <Signup {...props} UpdateLogInfo={this.UpdateLogInfo} /> } />
          </div>
        </Router>
    );
  }
  }



export default App;