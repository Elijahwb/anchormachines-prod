import React from 'react';

function InfoCard(props) {
    return (
        <div className='rounded-md bg-white my-1 p-2 border border-yellow-500 shadow-md'>
            <div className='font-semibold'>320 Users</div>
            <div><small>Signups from Field Agents</small></div>
            <div className='text-gray-500'><small>10% increase from last week</small></div>
        </div>
    );
}

export default InfoCard;