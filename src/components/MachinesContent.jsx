import React from 'react';
import { Link } from 'react-router-dom';
import Machinelist from './MachinesList';    

function Content(props) {
    return (
        <div style={container}>
           <div style={leftContent}>
            <div className='dashboard-title machines'>
                All Machines

                <span className='add-machine'>
                    <Link to='/addmachine'>+ Add Machine</Link>
                </span>
            </div>

            <Machinelist />
           </div>
        </div>
    );
}

const container = {
    display: 'flex'
}

const leftContent = {
    width: '100%',
}

export default Content;