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
            <ul className='navLinks'>
              <li className='headerList'><a href='#'>Home</a></li>
              <li className='headerList'><a href='#'>About</a></li>
              <li className='headerList'><a href='#'>Contact</a></li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col-2 sidebar'></div>
          <div className='col-8'>
            <div className='headline'>Amazing Custom Software Solutions</div>
            <p className='pageText'>Codiac Beach is a software company for the little guy. We can cater to your needs
              and customize software however your heart desires.</p>
            <p className='pageText'>Whatever your need is, we will be happy to talk about how we can make you successful</p>
          </div>
          <div className='col-2 sidebar'></div>
        </div>   

        <div className='midPage row'>
        <div className='col-2'></div>
          <div className='col-4'>
            <h4>Something Interesting</h4>
            <p className='pageText'>more details about said interesting thing</p>
          </div>
          <div className='col-4'>
            <h4>Something Interesting</h4>
            <p className='pageText'>more details about said interesting thing</p>
          </div>
          <div className='col-2'></div>
        </div>
        <div className='midPage row'>
        <div className='col-2'></div>
          <div className='col-4'>
            <h4>Something Interesting</h4>
            <p className='pageText'>more details about said interesting thing</p>
          </div>
          <div className='col-4'>
            <h4>Something Interesting</h4>
            <p className='pageText'>more details about said interesting thing</p>
          </div>
          <div className='col-2'></div>
        </div>
      </div>
    );
  }
}
