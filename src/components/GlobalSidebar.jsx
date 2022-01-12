import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

// Importing the anchormachines logo
import Logo from '../img/anchor-login.png';

function SideBar(props) {

    const [currentRoute, setCurrentRoute] = useState('') 

    const location = useLocation()

    const history = useHistory() 

   useEffect(() => {
    getCurrentRoute(location)
      return history.listen((location) => { 
            console.log(`You changed the page to: ${location.pathname}`)
            getCurrentRoute(location)
      }) 
   },)

    async function getCurrentRoute(location) {
        console.log(location.pathname)
        await setCurrentRoute(location.pathname.substring(1))
    }

    let activeRouteDashboard = classNames({
        "text-yellow-400": currentRoute === 'dashboard',
    })
    let activeRouteMachinery = classNames({
        "text-yellow-400": currentRoute === 'machines' || currentRoute === 'addmachine',
    })
    let activeRouteTransactions = classNames({
        "text-yellow-400": currentRoute === 'transactions',
    })
    let activeRouteNotifications = classNames({
        "text-yellow-400": currentRoute === 'notifications',
    })
    let activeRouteChat = classNames({
        "text-yellow-400": currentRoute === 'chat',
    })
    return (
        <section className='min-w-[200px] h-[100vh] text-white bg-black'>
            <div className='h-full w-full flex flex-col'>
                <Link to='/dashboard'><img className='sidebar-logo' src={Logo} alt=''></img></Link>

                <div className='flex flex-col px-5'>
                    <div className={activeRouteDashboard + ' flex my-2 group'} to='#'>
                        <div className='mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                            </svg>
                        </div>
                        <Link to='/dashboard' className='group-hover:text-yellow-400'>Dashboard</Link>
                    </div>
                    <div className={activeRouteMachinery + ' flex my-2 group'} to='#'>
                        <div className="mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                            </svg>
                        </div>
                        <Link to='/machines' className='group-hover:text-yellow-400'>Machinery</Link>
                    </div>
                    <div className={activeRouteTransactions + ' flex my-2 group'} to='#'>
                        <div className='mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z" />
                            </svg>
                        </div>
                        <Link to='#' className='group-hover:text-yellow-400'>Transactions</Link>
                    </div>
                    <div className={activeRouteNotifications + ' flex my-2 group'} to='#'>
                        <div className='mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        <Link to='#' className='group-hover:text-yellow-400'>Notifications</Link>
                    </div>
                    <div className={activeRouteChat + ' flex my-2 group'} to='#'>
                        <div className='mr-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                        </div>
                        <Link to='#' className='group-hover:text-yellow-400'>Chat</Link>
                    </div>
                </div>
            </div>

        </section>
    );
}

const linkStyle = {
    marginBottom: '20px'
}
export default SideBar;