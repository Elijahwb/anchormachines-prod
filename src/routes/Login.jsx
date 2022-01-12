import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import loginImage from '../img/anchor-login.png'
import classNames from 'classnames'
import Loader from '../components/GlobalLoader'
import * as AuthService from '../services/Service.Auth'
import * as APIService from '../services/Service.API'

const Login = props => {
  // useEffect(() => {
  //   sessionStorage.removeItem('amAuthenticated')
  //   sessionStorage.removeItem('amAccessToken')
  //   sessionStorage.removeItem('amRefreshToken')
  // },[])

  // Login process handlers
  //   const [accessToken, setAccessToken] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  //   const [authenticated, setAuthenticated] = useState(false)
  const [userPassword, setUserPassword] = useState('')
  const [userEmail, setUserEmail] = useState('')

  // Form error handlers
  const [emailError, setEmailError] = useState(false)
  // const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  // const [passwordErrorMessage, setPasswordErrorMessage] = useState('')
  const [wrongCredentials, setWrongCredentials] = useState(false)
  // const [credentialsErrorMessage, setCredentialsErrorMessage] = useState('')

  async function login (event) {
    event.preventDefault()

    await setIsLoading(true)

    // setWrongCredentials(false)

    // setEmailError(false)

    // setEmailErrorMessage('')

    // setPasswordError(false)

    // setPasswordErrorMessage('')
    // setIsLoading(true)

    APIService.attempt(userPassword, userEmail)

      .then(async response => {
        const data = response.data

        if ('access' in data) {
          AuthService.setAuth(true)

          AuthService.setToken(data.access)

          AuthService.setRefreshToken(data.refresh)

          await APIService.get('https://ancher-machine.herokuapp.com/accounts/users/me/')

            .then(response => {
              AuthService.setUser(response.data)

              moveToIndex()
            })

            .catch(err => console.log(err))

            .finally(async () => await setIsLoading(false))
        }
        else {
          setWrongCredentials(true)

          console.log('Access token was not created, check credentials')
        }
      })
      .catch(error => {
        console.log('inside the catch block')
        if (error.status === 401) {
          // document.querySelector('.login-button').click()
        }
      })
  }

  const history = useHistory()

  function moveToIndex () {
    if (AuthService.isAuth() === 'true') {
      history.push('/dashboard')
    }
  }

  function handleEmailInput (event) {
    setUserEmail(event.target.value)
  }

  function handlePasswordInput (event) {
    setUserPassword(event.target.value)
  }

  const emailErrorClass = classNames({
    'error-input-field': emailError
  })

  const emailErrorMsgClass = classNames({
    hidden: !emailError
  })

  const passwordErrorClass = classNames({
    'error-input-field': passwordError,
    rounded: true
  })

  const passwordErrorMsgClass = classNames({
    hidden: !passwordError
  })

  const showCredentialError = classNames({
    hidden: !wrongCredentials
  })

  const showOverlay = classNames({
    hidden: !isLoading,
    'show-loader-container': isLoading
  })

  return (
    <section className='registration-form' >
    <div className='registration-form-content'>

    <div className='registration-form-content-1'  style={contentOneStyle}></div>
    <div className='registration-form-content-2' style={{position: 'relative'}}>
        
        <h3 className='text-slate-900 text-3xl mb-10'>Login</h3>

        <div className={showCredentialError} style={wrongCrendentialsStyles}>Wrong credentials!</div>

        <form action=''>
            <label className="block my-4">
              <span className="block text-sm font-medium text-gray-700">Email</span>
              <input type="email" onInput={handleEmailInput} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-100
                disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
            </label>

            <label className="block my-4">
              <span className="block text-sm font-medium text-gray-700">Password</span>
              <input type="password" onInput={handlePasswordInput} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-100
                disabled:bg-gray-50 disabled:text-gray-500 disabled:border-gray-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              "/>
            </label>

            <div className='registration-form-column py-4'>
                <div className=''>
                    <input type='radio' name='' className='w-4 h-4 mr-1 on:text-yellow-500' />
                    <label className='text-slate-900'>Remember Me?</label>
                </div>  
            </div>

            <div className='registration-form-row'>
                <div className='rounded bg-slate-900 p-2 hover:bg-slate-800'>
                    <button type='submit' className='w-full mx-auto text-slate-50'
                    onClick={ login }>
                        {isLoading ? 'Loading...' : 'Login'}
                    </button>
                </div> 
            </div>

            <div className='registration-form-row'>
                <div className='registration-form-item'>
                    <p className='text-slate-900'>Don't have an account yet? <Link to='/register'>Sign up</Link></p>
                </div>   
            </div>
        </form>

        <div className={showOverlay} style={loginOverlayStyles}>
            <Loader />
        </div>
        
    </div>
    </div>

    </section>
  )
}

const contentOneStyle = {
  backgroundImage: `url(${loginImage})`,
  backgroundPosition: '75% 50%',
  backgroundSize: 'cover',
}

const wrongCrendentialsStyles = {
    width: '100%',
    background: '#fff6f6',
    borderLeft: '3px solid crimson',
    borderRight: '3px solid crimson',
    color: 'crimson',
    textAlign: 'center',
    padding: '10px',
    margin: '20px 0px',
}

const loginOverlayStyles = {
  position: 'absolute',
  top: '0',
  bottom: '0',
  right: '0',
  left: '0',
  background: 'rgba(245,215,49,0)'
}

export default Login
