import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Loader from './GlobalLoader';

function AddForm(props) {
    const [loading, setLoading] = useState(false);

    const history = useHistory()

    function toMachineList() {
        history.push('/machines')
    }

    function getValue(query){
        return document.querySelector(query).value;
    }

    async function registerMachine(event) {
        event.preventDefault();
        
        let newMachine = {
            machine_type: getValue('.machine-type'),
            machine_name: getValue('.machine-name'),
            model_name: getValue('.machine-model-name'),
            location: getValue('.location'),
            price: getValue('.machine-price'),
            image: null,
            Terms_and_conditions: getValue('.terms-and-conditions'),
            logbook: getValue('.machine-log-book'),
            tracker_type: getValue('.machine-tracker-type'),
            number_plate: getValue('.machine-number-plate'),
            tracker_imei: getValue('.machine-tracker-imei'),
            tracker_sim: getValue('.machine-tracker-sim'),
            machine_make: getValue('.machine-make'),
            machine_number_plate: getValue('.machine-number-plate'),
            location_lat: getValue('.latitude'),
            location_lon: getValue('.longitude'),
        }

        await axios.post('https://ancher-machine.herokuapp.com/machines/create_machine/',
        {...newMachine},{ headers: {"Authorization" : `Bearer ${sessionStorage.getItem('amAccessToken')}`}, })
        .then( response => {
            if(response.data.status === 201) {
                toMachineList();
            }
            else {
                console.log(response.data.message)
            }
        })
        .catch( err => console.log(err))
        .finally(async ()=> await setLoading(false))
    }

    return (
        <div className='container'>
            <form onSubmit={ registerMachine } className='container text-sm' autoComplete='off'>
                <div className='font-medium my-5 uppercase text-lg text-[#2e4765]' style={{'borderBottom': '1px solid gray'}}>
                    New Machine
                </div>

                <div className='grid md:grid-cols-3 gap-4 my-4 pt-5'>
                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Machine Name
                        </span>
                        <input required type="text" name="email" className="machine-name mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Machine name" required />
                    </label>

                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Model Name
                        </span>
                        <input required type="text" name="email" className="machine-model-name mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="machine model name" required />
                    </label>

                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Make
                        </span>
                        <input required type="text" name="email" className="machine-make mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Machine make" required />
                    </label>
                </div>

                <div className='grid md:grid-cols-3 gap-4 my-4'>
                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Type
                        </span>
                        <input required type="text" name="email" className="machine-type mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Machine type" required />
                    </label>

                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Tracker type
                        </span>
                        <input required type="text" name="email" className="machine-tracker-type mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Machine tracker type" required />
                    </label>

                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Tracker IMEI
                        </span>
                        <input required type="text" name="email" className="machine-tracker-imei mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Machine tracker IMEI" required />
                    </label>
                </div>

                <div className='grid md:grid-cols-3 gap-4 my-4'>
                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Tracker SIM
                        </span>
                        <input required type="text" name="email" className="machine-tracker-sim mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Machine tracker SIM" required />
                    </label>

                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Number plate
                        </span>
                        <input required type="text" name="email" className="machine-number-plate mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Machine number plate" required />
                    </label>

                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Log book
                        </span>
                        <input required type="text" name="email" className="machine-log-book mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Mahine log book" required />
                    </label>
                </div>

                <div className='grid md:grid-cols-3 gap-4 my-4'>
                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Location
                        </span>
                        <input required type="text" name="email" className="location mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Location" required />
                    </label>

                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Latitude
                        </span>
                        <input required type="text" name="email" className="latitude mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Latitude" required />
                    </label>

                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Longitude
                        </span>
                        <input required type="text" name="email" className="longitude mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Longitude" required />
                    </label>
                </div>

                <div className='grid md:grid-cols-3 gap-4 my-4'>
                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                            Price
                        </span>
                        <input required type="text" name="email" className="machine-price mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="" required />
                    </label>
                </div>

                <div className='grid my-4'>
                    <label className="block w-full">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-gray-700">
                        Terms and Conditions
                        </span>
                        <textarea rows={5} type="text" name="email" className="terms-and-conditions resize-none mt-1 px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-yellow-400 block w-full sm:text-sm focus:ring-1" placeholder="Terms and conditions" required />
                    </label>
                </div>

                <div className='grid my-4'>
                    <button type='submit'style={submit} className="bg-yellow-400 py-2.5 uppercase">
                        {loading ? 'Loading...' : 'Add Machine'}
                    </button>
                </div>

                {/* <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Machine Location <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter machine Location</small></span> </label>
                        <input required className='machine-location' type="text" name="" placeholder="Enter machine location" />
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Location Latitude <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter machine Location Latitue</small></span> </label>
                        <input required className='machine-location-lat' type="text" name="" placeholder="Enter machine location latitude" />
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Location Longitude <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter machine Location Longitude</small></span> </label>
                        <input required className='machine-location-lon' type="text" name="" placeholder="Enter machine location longitude" />
                    </div>
                </div> */}

                {
                    loading ?
                    <div style={overlay}>
                        <Loader />
                    </div>
                    :null
                }
            </form>
        </div>
    );
}

const submit = {
    background: 'var(--candlelight)',
    color: 'black',
}

const overlay = {
    position: 'absolute', 
    right: '0', 
    left: '0', 
    top: '0',
    bottom: '0', 
    background: 'rgba(0,0,0,.6)', 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center'
}

export default AddForm;