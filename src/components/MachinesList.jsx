import React, { useState, useEffect } from 'react';
import sampleImage from '../img/excavator.jpg';
import Loader from './GlobalLoader';
import axios from 'axios';

const MachineList = (props) =>{

    useEffect(()=> {
        fetchAllMachines()
    },[]);

    const [allMachines, setAllMachines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [noMachines, setNoMachines] = useState(false);

    async function fetchAllMachines() {
        await axios.get('https://ancher-machine.herokuapp.com/machines/owner_machines/', { headers: {"Authorization" : `Bearer ${sessionStorage.getItem('amAccessToken')}`} })
        .then( async (response) => {
            if(response.data.machines.length == 0) await setNoMachines(true)
            await setAllMachines(response.data.machines)
            await setLoading(false)
        })
        .catch( err => console.log(err))
        .finally(async ()=> console.log('All is finally done'))
    }

    return (
        <div className='min-h-[83vh] w-full shadow-lg text-gray-700 rounded-t-md bg-white'>
            <table className='w-full overflow-x-auto rounded-t-md'>
                <tr className='font-semibold border-gray-800 rounded-t-md' style={{'border-bottom': '1px solid gray', 'border-top': '1px solid gray'}}>
                    {/* <td>Photo</td> */}
                    <td className='py-3 pl-2'>Name</td>
                    <td className='py-3'>Number plate</td>
                    <td className='py-3'>Price</td>
                    <td className='py-3'>Location</td>
                    <td className='py-3'>Status</td>
                </tr>

                {
                    allMachines.map((machine, index) => {
                        return (
                            <tr key={index} style={{'border-bottom': '1px solid #dfdbdb'}} className='cursor-pointer hover:shadow-md'>
                                {/* <td className='pr-1'><img className='w-20 object-cover' src={sampleImage} alt='Machine'></img></td> */}
                                <td className='py-4 pl-2'>{machine.machine_name ? machine.machine_name : 'NaN'}</td>
                                <td className='py-4'>{machine.machine_number_plate ? machine.machine_number_plate: 'NaN'}</td>
                                <td className='py-4'>UGX {machine.price} - Day</td>
                                <td className='py-4'>{machine.location}</td>
                                <td className='py-4'>Active</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    );
    // return (
    //     <div className='machines-list'>
    //         <div className='list-item heading'>
    //             <div className='name-contents heading'>
    //                 Name
    //             </div>
    //             <div className='location heading'>Location</div>
    //             <div className='status heading'>
    //                 Access
    //             </div>
    //         </div>
    //         {
    //             allMachines.map((machine, index) => {
    //                 return <div className='list-item hover:bg-yellow-50' key={index}>
    //                             <div className='name-contents'>
    //                                 <div className='custom-avatar'>
    //                                     <img src={sampleImage}></img>
    //                                 </div>
    //                                 <div className='info'>
    //                                     <span className='name'><small>{machine.machine_name ? machine.machine_name : 'NaN'}</small></span>
    //                                     <span><small>{machine.machine_number_plate ? machine.machine_number_plate: 'NaN'}</small></span>
    //                                     <span><small>UGX{machine.price} - Day</small></span>
    //                                 </div>
    //                             </div>
    //                             <div className='location'>{machine.location}</div>
    //                             <div className='status'>
    //                                 <button>Active</button>
    //                             </div>
    //                         </div>
    //             })
    //         }

    //         {
    //             noMachines && allMachines.length == 0 
    //             ? <div style={loadingSection}>No Machines Available</div>
    //             : null
    //         }

    //         {
    //             loading 
    //             ? <div style={loadingSection}>
    //                 <Loader />
    //                 <div>Fetching machines...</div>
    //             </div>
    //             : null
    //         }
    //     </div>
    // );
}

const loadingSection = {
    fontSize: '20px',
    width: '100%',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'var(--white)'
}

export default MachineList;