import React from 'react';
import Graph from './DashboardGraph';

function GraphSection(props) {
    return (
        <div className='dashboard-graph-container'>
            <Graph />
        </div>
    );
}

export default GraphSection;