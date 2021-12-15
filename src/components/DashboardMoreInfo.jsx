import React from 'react';

function MoreInfo(props) {
    return (
        <div className='dashboard-more-info-container my-5 gap-4 grid grid-cols-4 sm:grid-cols-3  md:grid-cols-4'>
            
            <div className='more-info-item border-r-2 border-yellow-300 text-black shadow-lg pb-1' style={{'border-right': '3px solid green'}}>
                <div className='icon-area flex justify-center align-middle py-3'><i className='fab fa-telegram-plane'></i></div>
                <div className='info-details-area flex flex-col align-middle'>
                    <div className='text-md text-center'>20</div>
                    <div className='text-center text-sm text-gray-500'>Dispatches</div>
                </div>
            </div>
            <div className='more-info-item border-r-2 border-yellow-300 text-black shadow-lg' style={{'border-right': '3px solid #ffcc17'}}>
                <div className='icon-area flex justify-center align-middle py-3'><i className='fas fa-route'></i></div>
                <div className='info-details-area flex flex-col align-middle'>
                    <div className='text-md text-center'>10</div>
                    <div className='text-center text-sm text-gray-500'>In - Transit</div>
                </div>
            </div>
            <div className='more-info-item border-r-2 border-yellow-300 text-black shadow-lg' style={{'border-right': '3px solid #03a9f4'}}>
                <div className='icon-area flex justify-center align-middle py-3'><i className='far fa-check-circle'></i></div>
                <div className='info-details-area flex flex-col align-middle'>
                    <div className='text-md text-center'>20</div>
                    <div className='text-center text-sm text-gray-500'>Active</div>
                </div>
            </div>
            <div className='more-info-item border-r-2 border-yellow-300 text-black shadow-lg' style={{'border-right': '3px solid crimson'}}>
                <div className='icon-area flex justify-center align-middle py-3'><i className='far fa-times-circle'></i></div>
                <div className='info-details-area flex flex-col align-middle'>
                    <div className='text-md text-center'>20</div>
                    <div className='text-center text-sm text-gray-500'>Inactive</div>
                </div>
            </div>
        </div>
    );
}

export default MoreInfo;