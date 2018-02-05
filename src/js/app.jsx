import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link
 } from 'react-router-dom';
 import Home from './components/Home';
 import About from './components/About';

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <div>
          <div className='header'>
            <ul className='contact'>
              <li className='contactItem'>555-555-5555</li>
              <li className='contactItem'>matt@codiacbeach.com</li>
            </ul>
            <div className='banner'>
              <img className='logo' src='./assets/logo-bw.png'/>
              <ul className='nav'>
                <li className='navItem'><Link to='/'>Home</Link></li>
                <li className='navItem'><Link to='/about'>About Us</Link></li>
                <li className='navItem'>
                  <div className='dropdown'>
                    <Link to='#' className='topItem'>Services</Link>
                    <div className='dropdownContent'>
                      <Link to='#'>Software</Link>
                      <Link to='#'>Websites</Link>
                      <Link to='#'>Apps</Link>
                    </div>
                  </div>
                </li>
                <li className='navItem'>
                  <div className='dropdown'>
                    <Link to='#' className='topItem'>Industries</Link>
                    <div className='dropdownContent'>
                      <Link to='#'>Construction</Link>
                      <Link to='#'>SaaS</Link>
                      <Link to='#'>Power</Link>
                    </div>
                  </div>
                </li>
                <li className='navItem'><Link to='#'>Careers</Link></li>
                <li className='navItem'><Link to='#'>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className='content'>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
        </div>

        <div className='footer'>
          <p className='footerText'>Codiac Beach LLC, 2017</p> 
        </div>   
      </div>
      </Router>
    );
  }
}



