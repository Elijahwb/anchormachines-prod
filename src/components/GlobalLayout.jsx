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
        console.log(location)
    }

    return (
        <section className='container flex grid-cols-5 gap-4 sm:mx-auto'>
            <Sidebar activeRoute={props.activeRoute}/>
            <section style={ mainContent } className='container col-span-5'>
                <Top />
                {
                    currentRoute !== '/dashboard' ?
                    (
                        <div onClick={back} className='px-5 flex items-center cursor-pointer text-gray-500'>
                            <span className='hover:opacity-80'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </span>
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