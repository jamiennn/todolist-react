import axios from 'axios'

const baseURL = 'https://todo-list.alphacamp.io/api'

const axiosInstance = axios.create({baseURL})
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken")
    if (token) config.headers['Authorization'] = `Bearer ${token}`
    return config
  }, (error) =>  console.error(error)
)

export const getTodos = async () => {
  try {
    const res = await axiosInstance.get(`${baseURL}/todos`)
    return res.data.data
  } catch (e) {
    console.error('[Get Todos failed]: ', e)
  }
}
export const createTodo = async (payload) => {
  try {
    const { title, isDone } = payload
    const res = await axiosInstance.post(`${baseURL}/todos`, {
      title,
      isDone
    })
    return res.data.data
  } catch (e) {
    console.error('[Create Todo failed]: ', e)
  }
}
export const patchTodo = async (payload) => {
  try {
      const {id, title, isDone} = payload
      const res = await axiosInstance.patch(`${baseURL}/todos/${id}`, {
        title,
        isDone
      })
      return res.data.data
  } catch(e) {
    console.error(e)
  }
}
export const deleteTodo = async (id) => {
  try {
    const res = await axiosInstance.delete(`${baseURL}/todos/${id}`)
    return res.data.data
  } catch (e) {
    console.error(e)
  }
}
