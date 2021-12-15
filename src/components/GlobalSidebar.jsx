import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Importing the anchormachines logo
import Logo from '../img/anchor-login.png';

function SideBar(props) {

    let activeRouteDashboard = classNames({
        "sidebar-link": true,
        "active": props.activeRoute == 'dashboard',
    })
    let activeRouteMachinery = classNames({
        "sidebar-link": true,
        "active": props.activeRoute == 'machines',
    })
    let activeRouteTransactions = classNames({
        "sidebar-link": true,
        "active": props.activeRoute == 'transactions',
    })
    let activeRouteNotifications = classNames({
        "sidebar-link": true,
        "active": props.activeRoute == 'notifications',
    })
    let activeRouteChat = classNames({
        "sidebar-link": true,
        "active": props.activeRoute == 'chat',
    })
    return (
        <section className='sidebar-container hidden'>
            <Link to='/dashboard'><img className='sidebar-logo' src={Logo}></img></Link>

            <div className='sidebar-links'>
                <div className={activeRouteDashboard} to='#'>
                    <div className='sidebar-icon-area'><i className='fas fa-chart-pie'></i></div>
                    <Link to='/dashboard'>Dashboard</Link>
                </div>
                <div className={activeRouteMachinery} to='#'>
                    <div className='sidebar-icon-area'><i className='fas fa-truck-moving'></i></div>
                    <Link to='/machines'>Machinery</Link>
                </div>
                <div className={activeRouteTransactions} to='#'>
                    <div className='sidebar-icon-area'><i className='fas fa-exchange-alt'></i></div>
                    <Link to='#'>Transactions</Link>
                </div>
                <div className={activeRouteNotifications} to='#'>
                    <div className='sidebar-icon-area'><i className='fas fa-bell'></i></div>
                    <Link to='#'>Notifications</Link>
                </div>
                <div className={activeRouteChat} to='#'>
                    <div className='sidebar-icon-area'><i className='fas fa-comments'></i></div>
                    <Link to='#'>Chat</Link>
                </div>
            </div>

        </section>
    );
}

const linkStyle = {
    marginBottom: '20px'
}
export default SideBar;