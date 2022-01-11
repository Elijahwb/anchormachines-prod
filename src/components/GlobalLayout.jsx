import React, { useEffect, useState } from 'react';
import Sidebar from './GlobalSidebar';
import Top from './GlobalTopnav';
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

function Layout(props) {
    useEffect(()=>getCurrentRoute())

    const [currentRoute, setCurrentRoute] = useState('') 

    const history = useHistory()

    function back () {
        history.goBack()
    }

    const location = useLocation()
    function getCurrentRoute() {
        setCurrentRoute(location.pathname)
    }

    return (
        <section className='container grid sm:grid-cols-5 gap-4 sm:mx-auto'>
            <Sidebar activeRoute={props.activeRoute}/>
            <section style={ mainContent } className='container col-span-5'>
                <Top />
                {
                    currentRoute !== '/dashboard' ?
                    (
                        <div onClick={back} className='px-5 flex items-center cursor-pointer text-gray-500'>
                            <span className='hover:opacity-80 text-yellow-500 underline'>Dashboard</span>
                            <span className='ml-1 capitalize font-medium'>/ {currentRoute.substring(1)}</span>
                        </div>
                    ):
                    null
                }
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