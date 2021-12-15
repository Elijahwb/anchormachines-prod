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
            location: getValue('.machine-location'),
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
            location_lat: getValue('.machine-location-lat'),
            location_lon: getValue('.machine-location-lon'),
        }

        await axios.post('https://ancher-machine.herokuapp.com/machines/create_machine/',
        {...newMachine},{ headers: {"Authorization" : `Bearer ${sessionStorage.getItem('amAccessToken')}`}, })
        .then( response => {
            if(response.data.message == 'Machine created successfully') {
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
        <div className='register-machine-container'>
            <form action="">
                <div className='dashboard-title machines' style={{display: 'flex', justifyContent:'center'}}>
                    New Machine
                </div>
                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Machine Name <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter your email</small></span> </label>
                        <input className='machine-name'  type="text" name="" placeholder="Enter machine name" />
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Machine model name <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter your password</small></span></label>
                        <input className='machine-model-name' type="text" name="" placeholder="Enter model name"/>
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Machine make <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter Machine Make</small></span></label>
                        <input className='machine-make' type="text" name="" placeholder="Enter make"/>
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Machine type <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter Machine type</small></span></label>
                        <input className='machine-type' type="text" name="" placeholder="Enter machine type"/>
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Machine tracker type <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter Machine tracker type</small></span></label>
                        <input className='machine-tracker-type' type="text" name="" placeholder="Enter tracker type"/>
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Machine tracker IMEI <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter Machine tracker IMEI</small></span></label>
                        <input className='machine-tracker-imei' type="text" name="" placeholder="Enter tracker IMEI"/>
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Machine tracker SIM <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter Machine tracker SIM</small></span></label>
                        <input className='machine-tracker-sim' type="text" name="" placeholder="Enter tracker SIM"/>
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Number Plate <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter machine number plate</small></span> </label>
                        <input className='machine-number-plate' type="text" name="" placeholder="Enter number plate" />
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Log Book <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter machine Log Book</small></span> </label>
                        <input className='machine-log-book' type="text" name="" placeholder="Enter log book" />
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Machine Location <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter machine Location</small></span> </label>
                        <input className='machine-location' type="text" name="" placeholder="Enter machine location" />
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Location Latitude <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter machine Location Latitue</small></span> </label>
                        <input className='machine-location-lat' type="text" name="" placeholder="Enter machine location latitude" />
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Location Longitude <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter machine Location Longitude</small></span> </label>
                        <input className='machine-location-lon' type="text" name="" placeholder="Enter machine location longitude" />
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Price <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter Price</small></span> </label>
                        <input className='machine-price' type="number" name="" placeholder="Enter price" />
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <label className="playfairdisplay-bold-black-15px">Terms and Conditions <span><small style={{display: 'none',marginLeft: "5px", color: "crimson", fontSize: "12px"}}>Please enter Terms and Conditions</small></span> </label>
                        <input className='terms-and-conditions' rows={8}/>
                    </div>
                </div>

                <div className="registration-form-row">
                    <div className="registration-form-item">
                        <button type='submit'style={submit} className="login-button"
                        onClick={ registerMachine }>
                            {loading ? 'Loading...' : 'Add Machine'}
                        </button>
                    </div> 
                </div>

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