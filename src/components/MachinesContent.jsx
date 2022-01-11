import React from 'react';
import { Link } from 'react-router-dom';
import Machinelist from './MachinesList';    

function Content(props) {
    return (
        <div style={container}>
           <div style={leftContent} className='text-sm'>
                <div className='font-medium mt-5 pb-2 uppercase text-lg text-[#2e4765] flex items-end justify-between' style={{'border-bottom': '1px solid transparent'}}>
                    <div>All Machines</div>
                    <div className='bg-yellow-400 drop-shadow-md hover:drop-shadow-lg text-slate-900 px-2 py-2 text-sm'>
                        <Link to='/addmachine'>+ Add Machine</Link>
                    </div>
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