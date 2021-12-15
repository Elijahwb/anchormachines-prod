import React from 'react';
import AddForm from './AddMachineForm'; 

function Content(props) {
    return (
        <div style={container}>
           <div style={leftContent}>
            {/* <div className='dashboard-title machines'>
                Add Machines
            </div> */}

            <AddForm />
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