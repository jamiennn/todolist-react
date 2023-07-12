import axios from 'axios'

const authURL = "https://todo-list.alphacamp.io/api/auth"

export const login = async (username, password) => {
  try {
    const { data } = await axios.post(`${authURL}/login`, { username, password })
    if (data.authToken) {
      return { success: true, ...data}
    }
    return data
  } catch (e) {
    console.error('[Login failed]:', e)
  }
}

export const register = async (username, email, password) => {
  try {
    const { data } = await axios.post(`${authURL}/register`, { username, email, password })
    if (data.authToken) {
      return { success: true, ...data}
    }
    return data
  } catch (e) {
    console.error('[Register failed]:', e)
  }
}

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authURL}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken
      }
    })
    return response.data.success
  } catch (e) {
    console.error('[Check Permissoin Failed]:', e)
  }
}