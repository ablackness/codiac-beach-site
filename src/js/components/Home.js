import React from 'react';

export default class Home extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <div className='row'>
            <div className='col-2 sidebar'></div>
            <div className='col-8'>
              <div className='headline'>Amazing Custom Software Solutions</div>
              <p className='pageText'>Codiac Beach is a software company for the little guy. We can cater to your needs
                and customize software however your heart desires.</p>
              <p className='pageText'>Whatever your need is, we will be happy to talk about how we can make you successful.</p>
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
          
     
      )}
  }