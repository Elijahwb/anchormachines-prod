import React from 'react';
import AddMachinesContent from '../../components/authorised/machines/addmachine';
import '../../css/machines/index.css';
import '../../css/dashboard/index.css';

const dashboard = props => {
    return (
        <section>
            <AddMachinesContent />
        </section>
    );  
};
export default dashboard;