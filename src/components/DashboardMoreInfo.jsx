import React from 'react';

function MoreInfo(props) {
    return (
        <div className='dashboard-more-info-container'>
            <div className='more-info-item'>
                <div className='icon-area'><i className='fab fa-telegram-plane'></i></div>
                <div className='info-details-area'>
                    <div>20</div>
                    <div>Dispatches</div>
                </div>
            </div>
            <div className='more-info-item'>
                <div className='icon-area'><i className='fas fa-route'></i></div>
                <div className='info-details-area'>
                    <div>10</div>
                    <div>In - Transit</div>
                </div>
            </div>
            <div className='more-info-item'>
                <div className='icon-area'><i className='far fa-check-circle'></i></div>
                <div className='info-details-area'>
                    <div>20</div>
                    <div>Active</div>
                </div>
            </div>
            <div className='more-info-item'>
                <div className='icon-area'><i className='far fa-times-circle'></i></div>
                <div className='info-details-area'>
                    <div>20</div>
                    <div>Inactive</div>
                </div>
            </div>
        </div>
    );
}

export default MoreInfo;