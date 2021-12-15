import React from 'react';
import { Link } from 'react-router-dom';
import Machinelist from './MachinesList';    

function Content(props) {
    return (
        <div style={container}>
           <div style={leftContent}>
            <div>
                <span className='text-xl mr-2'>All Machines</span>

                <span className='rounded-lg drop-shadow-md hover:drop-shadow-lg text-slate-900 bg-slate-50 px-2 py-2 text-sm'>
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