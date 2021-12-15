import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom'
import profile from '../img/profile/profile.jpeg';
import classNames from "classnames";
import * as AuthService from '../services/Service.Auth';

function Top(props) {
    useEffect(()=> {
        let ignoreClickOnMeElement = document.querySelector('.account');
        let profileImage = document.querySelector('.profile-image');

        document.addEventListener('click', function(event) {
            let isClickInsideElement = ignoreClickOnMeElement != null ? ignoreClickOnMeElement.contains(event.target) : false;
            let isClickProfile = profileImage != null ? profileImage.contains(event.target) : false;

            if (!isClickInsideElement) {
                
                if(isClickProfile) {
                    showProfile()
                }
                else {
                    hideProfile()
                }
            }
        });
    });

    const [profileMenu, setProfileMenu] = useState(false);

    // Global variables of the component
    var user = AuthService.user();

    var history = useHistory();

    const toLogin = () => history.push("/login")

    // CSS class Switchers
    let showProfileMenu = classNames({
        "hide": !profileMenu,
        "account": profileMenu || !profileMenu
    })


    /* 
     *Functions of the component
     */
    async function showProfile() {
        await setProfileMenu(true)
    }

    async function hideProfile() {
        setTimeout(async ()=> await setProfileMenu(false), 100)
    }

    return (
        <div className='top-section container px-5 py-2 flex justify-between sm:py-5'>
            <div className='welcome-message'>
                <span className='hidden'>Welcome Back!</span> <span className='font-semibold'>{user.first_name} {user.last_name}</span>
            </div>

            {/* <div className='profile-area'>
                <div className='actions'>
                    <img src={profile}></img>
                    <span>Logout</span>
                </div>
                <div className='notifications'>
                    <i className='fas fa-bell'></i>
                    <i className='fas fa-ellipsis-h'></i>
                </div>
            </div> */}

            <div className='profile-area'>
                <div className='notifications'>
                    <i className='fas fa-bell'></i>
                </div>
                <div className='actions'>
                    <img className='inline-block ring-2 ring-white' src={profile}></img>
                    <div className={showProfileMenu}>
                        <div className='account-item' onClick={ hideProfile }>{user.email}</div>
                        <div className='account-item' onClick={ hideProfile }>Setting</div>
                        <div className='account-item' onClick={()=> AuthService.logout(toLogin) }>Logout</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Top;