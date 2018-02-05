import React from 'react';

export default class About extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-2 sidebar'></div>
                    <div className='col-8'>
                    <div className='headline'>We are Codiac Beach</div>
                    <p className='pageText'>This is the about page. Here you
                                        can tell visitors something intereting
                                        about codiac beach.</p>
                    <p className='pageText'>More about Codiac Beach..</p>
                    </div>
                    <div className='col-2 sidebar'></div>
                </div>   
            </div>
        )
    }
}