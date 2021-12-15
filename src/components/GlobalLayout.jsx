import React from 'react';
import Sidebar from './GlobalSidebar';
import Top from './GlobalTopnav';

function Layout(props) {
    return (
        <section className='container grid sm:grid-cols-5 gap-4 sm:mx-auto'>
            <Sidebar activeRoute={props.activeRoute}/>
            <section style={ mainContent } className='container col-span-5'>
                <Top />
                <section className='left-content' style={otherContent}>
                    {props.content}
                </section>
            </section>
        </section>
    );
}

const mainContent = {
    background: '#f5f6fa',
    height: '100vh',
    width: '100%',
    overflowY: 'auto'
}

const otherContent = {
    marginTop: '20px',
    padding: '0px 20px 20px 20px',
    // border: '1px solid blue',
    width: '100%',
    height: 'calc(100vh - 80px - 20px)',
}

const mainContainer = {
    // background: '#000000',
    // background: 'var(--gray-nurse)',
    display: 'flex',
    height: '100vh',
    width: '100%',
    fontSize: '16px',
}
export default Layout;