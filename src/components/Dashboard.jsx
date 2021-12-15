import React from 'react';
import Layout from './GlobalLayout';
import Content from './DashboardContent';

function DashboardContent(props) {
    return (
        <section>
            <Layout activeRoute='dashboard' content={<Content />} />
        </section>
    );
}
export default DashboardContent;