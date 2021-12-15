import axios from 'axios'
import { token } from './Service.Auth'

export function headers () {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token()}`
    }
  }
}

export async function attempt (password, email) {
  return await axios.post('https://ancher-machine.herokuapp.com/auth/jwt/create/', { password, email })
}

export async function get (url) {
  return await axios.get(url, headers())
}

export async function post (url, data) {
  return await axios.post(url, data, headers())
}

export async function put (url, data) {
  return await axios.put(url, data, headers())
}
