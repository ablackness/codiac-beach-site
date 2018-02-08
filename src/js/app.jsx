import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Link
 } from 'react-router-dom';
 import Home from './components/Home';
 import About from './components/About';
 import Contact from './components/Contact';
 import Careers from './components/Careers';

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <div className='container row'>
        <header className='header col-12'>
          <ul className='contact'>
            <li className='contactItem'>matt@codiacbeach.com</li>
          </ul>
          <div className='banner'>
            <Link to='/'><img className='logo' src='./assets/logo-bw.png'/></Link>
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
              <li className='navItem'><Link to='/careers'>Careers</Link></li>
              <li className='navItem'><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </header>
        
        <article className='content col-12'>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/careers' component={Careers}/>
        </article>
      
        <footer className='footer col-12'>
          <p className='footerText'>Codiac Beach LLC, &copy;2017</p> 
        </footer>   
      </div>
      </Router>
    );
  }
}



