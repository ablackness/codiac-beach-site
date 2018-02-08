import React from 'react';
import {
    Link
 } from 'react-router-dom';

export default class Careers extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-2 sidebar'></div>
                    <div className='col-8'>
                        <div className='headline'>Careers</div>
                        <p className='pageText'>No positions currrently available.</p>
                        <p className='pageText'>Got a good story? Reach out to us <Link to='/contact'>here</Link>.</p>
                    </div>
                    <div className='col-2 sidebar'></div>
                </div> 
            </div>
        )
    }
}