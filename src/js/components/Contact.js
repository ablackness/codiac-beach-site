import React from 'react';

export default class Contact extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-2 sidebar'></div>
                    <div className='col-8'>
                        <div className='headline'>Contact</div>
                        <p className='pageText'>Please feel free to reach out to us with any inquiries at matt@codiacbeach.com.</p>
                    </div>
                    <div className='col-2 sidebar'></div>
                </div> 
            </div>
        )
    }
}