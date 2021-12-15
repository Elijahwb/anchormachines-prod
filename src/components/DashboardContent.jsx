import React from 'react';
import GraphSection from './DashboardGraphSection';
import InfoCard from './DashboardInfoCard';
import MoreInfo from './DashboardMoreInfo';
import RecentActivities from './DashboardRecentActivities';

function Content(props) {
    return (
        <div style={container}>
           <div style={leftContent}>
            <div className='dashboard-title'>Overview</div> 

            <div className='info-cards'>
                <InfoCard />
                <InfoCard />
                <InfoCard />
            </div>

            <GraphSection />

            <MoreInfo />

            <RecentActivities />
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