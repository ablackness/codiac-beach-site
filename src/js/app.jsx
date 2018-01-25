import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <div style={{backgroundColor: 'rgb(117, 163, 151)'}}>
          <ul style={{display: 'block', borderBottom: 'white solid 1px'}}>
            <li className='headerList'>PHONE</li>
            <li className='headerList'>EMAIL</li>
          </ul>
          <div>
            <img style={{marginLeft: '12%', paddingTop: 15, paddingBottom: 15, display: 'inline-block'}} src='./assets/logo-bw.png'/>
            <ul style={{display: 'inline-block', paddingLeft: '40%'}}>
              <li className='headerList'>Home</li>
              <li className='headerList'>About</li>
              <li className='headerList'>Contact</li>
            </ul>
          </div>
        </div>
        <div className='banner'>
          <h4 className='bannerText'>Custom Software Solutions</h4>
        </div>
        <p className='h3 text-center'>MANTRA ___ Developing Software to Save the World</p>
        
      </div>
    );
  }
}
