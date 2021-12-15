import React from 'react';
import Layout from './GlobalLayout';
import Content from './AddMachinesContent';

function DashboardContent(props) {
    return (
        <section>
            <Layout activeRoute='machines' content={<Content />} />
        </section>
    );
}
export default DashboardContent;