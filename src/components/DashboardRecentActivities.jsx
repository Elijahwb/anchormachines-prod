import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import axios from 'axios'
import { headers } from '../services/Service.API'
import Loader from './GlobalLoader'
import * as AuthService from '../services/Service.API'
// import { get as Get } from '../../../services/Service.API';

function RecentActivities () {
  useEffect(() => {
    // some functionality here
    machineRequests()
  }, [])

  const [activeTab, setActiveTab] = useState('all')
  const [loading, setLoading] = useState(true)
  const [allMachineRequests, setAllMachineRequests] = useState([])

  async function machineRequests () {
    // Fetch machines
    await axios.get('https://ancher-machine.herokuapp.com/machines/web_machine_requests', headers())
      .then(async (response) => {
        console.log(response.data.requests)
        if (response.status === 200) {
          if (response.data.status === 200) await setAllMachineRequests(response.data.requests)
        }
      })
      .finally(async () => await setLoading(false))
  }

  async function declineRequest (requestId) {
    console.log('inside decline machine function')
    console.log(headers())
    await axios.put(`https://ancher-machine.herokuapp.com/machines/decline_request/${requestId}/`, headers())
      .then(response => console.log(response.data))
  }

  async function acceptRequest (requestId) {
    console.log('inside accept machine function')
    console.log(headers())
    await axios.put('machines/approve_request/request_id', { request_id: requestId }, headers())

      .then(response => console.log(response.data))
  }

  function changeActiveTab (tab) {
    setActiveTab(tab)
  }

  const allActive = classNames({
    upcoming: true,
    active: activeTab === 'all'
  })
  const allHide = classNames({
    upcoming: true,
    hide: activeTab !== 'all'
  })

  const newActive = classNames({
    history: true,
    active: activeTab === 'new',
    'border-b-3 border-yellow-400': activeTab === 'new',
  })
  const newHide = classNames({
    history: true,
    hide: activeTab !== 'new'
  })

  const acceptedActive = classNames({
    history: true,
    active: activeTab === 'accepted'
  })
  const acceptedHide = classNames({
    history: true,
    hide: activeTab !== 'accepted'
  })

  const declinedActive = classNames({
    history: true,
    active: activeTab === 'declined'
  })
  const declineHide = classNames({
    history: true,
    hide: activeTab !== 'declined'
  })

  return (
    <div className='dashboard-recent-activities-container'>
      <div className='dashboard-title'>Machine Requests</div>

      <div className='content'>
        <div className='controls flex justify-between'>
          <div className='tabs flex'>
            <div className={allActive + ' mr-3'} onClick={() => changeActiveTab('all')}>All</div>
            <div className={newActive + ' mr-3'} onClick={() => changeActiveTab('new')}>New</div>
            <div className={acceptedActive + ' mr-3'} onClick={() => changeActiveTab('accepted')}>Accepted</div>          </div>
          <div className='date-filter'>6. Sep. 2020 - 8. Nov. 2020</div>
        </div>
        {
          (loading && allMachineRequests.length === 0) &&
            <div style={loadingSection}>
              <Loader />
              <div>Loading requests...</div>
            </div>
        }
        {
          (!loading && allMachineRequests.length === 0) &&
            <div style={loadingSection}>
              <div>No Machine requests</div>
            </div>
        }
        {
          (!loading && allMachineRequests.length >= 0) &&
            <div className='activities-list'>
              <div className={allHide}>
                {
                  allMachineRequests.map((request, index) => {
                    return (
                      <div className='activity-item request' key={index}>
                        <div>
                          <div>{request.machine.machine_name} - {request.machine.machine_number_plate}</div>
                          <div>Request by: <small>{request.customer.first_name} {request.customer.last_name}</small></div>
                          <div>
                            {
                            request.customer.telephone !== null
                              ? <small>Tel: {request.customer.telephone}</small>
                              : <small>Email: {request.customer.email}</small>
                            }
                          </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                          {!request.is_accepted && <button className='request-button accept' onClick={() => acceptRequest(request.id)}>Accept</button>}
                          {!request.is_declined && <button className='request-button decline' onClick={() => declineRequest(request.id)}>Decline</button>}
                        </div>
                      </div>
                    )
                  })
                }
              </div>

              <div className={newHide}>
                {
                  allMachineRequests.map((request, index) => {
                    if (request.is_accepted === false && request.is_declined === false) {
                      return (
                        <div className='activity-item request' key={index}>
                          <div>
                            <div>{request.machine.machine_name} - {request.machine.machine_number_plate}</div>
                            <div>Request by: <small>{request.customer.first_name} {request.customer.last_name}</small></div>
                            <div>
                              {
                                request.customer.telephone !== null
                                  ? (<small>Tel:  {request.customer.telephone}</small>)
                                  : <small>Email: {request.customer.email}</small>
                              }
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='request-button accept' onClick={() => acceptRequest(request.id)}>Accept</button>
                            <button className='request-button decline' onClick={() => declineRequest(request.id)}>Decline</button>
                          </div>
                        </div>
                      )
                    }
                    return null
                  })
                  }
              </div>

              <div className={acceptedHide}>
                {
                  allMachineRequests.map((request, index) => {
                    if (request.is_accepted === true) {
                      return (
                        <div className='activity-item request' key={index}>
                          <div>
                            <div>{request.machine.machine_name} - {request.machine.machine_number_plate}</div>
                            <div>Request by: <small>{request.customer.first_name} {request.customer.last_name}</small></div>
                            <div>
                              {
                                request.customer.telephone !== null
                                  ? (<small>Tel:  {request.customer.telephone}</small>)
                                  : <small>Email: {request.customer.email}</small>
                              }
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='request-button accept' onClick={() => acceptRequest(request.id)}>Accept</button>
                            <button className='request-button decline' onClick={() => declineRequest(request.id)}>Decline</button>
                          </div>
                        </div>
                      )
                    }
                    return null
                  })
                  }
              </div>

              <div className={declineHide}>
                {
                  allMachineRequests.map((request, index) => {
                    if (request.is_declined === true) {
                      return (
                        <div className='activity-item request' key={index}>
                          <div>
                            <div>{request.machine.machine_name} - {request.machine.machine_number_plate}</div>
                            <div>Request by: <small>{request.customer.first_name} {request.customer.last_name}</small></div>
                            <div>
                              {
                                request.customer.telephone !== null
                                  ? (<small>Tel:  {request.customer.telephone}</small>)
                                  : <small>Email: {request.customer.email}</small>
                              }
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button className='request-button accept' onClick={() => acceptRequest(request.id)}>Accept</button>
                            <button className='request-button decline' onClick={() => declineRequest(request.id)}>Decline</button>
                          </div>
                        </div>
                      )
                    }
                    return null
                  })
                  }
              </div>
            </div>
        }
      </div>
    </div>
  )
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

export default RecentActivities
