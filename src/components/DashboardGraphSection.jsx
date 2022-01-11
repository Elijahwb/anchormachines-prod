import React from 'react';
import Graph from './DashboardGraph';

function GraphSection(props) {
    return (
        <div className='h-[45vh] w-full shadow-lg my-5 py-5'>
            <Graph />
        </div>
    );
}

export default GraphSection;