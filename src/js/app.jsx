import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div className='header'>
          <ul className='contactInfo'>
            <li className='headerList'>555-555-5555</li>
            <li className='headerList'>matt@codiacbeach.com</li>
          </ul>
          <div className='banner'>
            <img className='logo' src='./assets/logo-bw.png'/>
            <span className='bannerText'>Custom Software Solutions</span>
            <ul className='navLinks'>
              <li className='headerList'><a href='#'>Home</a></li>
              <li className='headerList'><a href='#'>About</a></li>
              <li className='headerList'><a href='#'>Contact</a></li>
            </ul>
          </div>
        </div>
        <div>
          <img className='codeImage' src='./assets/code.jpg' alt='code'/>
        </div>
        
        <p className='h3 text-center mantra'>MANTRA ___ Developing Software to Save the World</p>  
      </div>
    );
  }
}
