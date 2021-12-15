import React from 'react';

function InfoCard(props) {
    return (
        <div className='dashboard-info-card'>
            <div>320 Users</div>
            <div><small>Signups from Field Agents</small></div>
            <div><small>10% increase from last week</small></div>
        </div>
    );
}

export default InfoCard;