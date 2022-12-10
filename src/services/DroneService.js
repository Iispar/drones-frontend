import axios from 'axios'
const baseUrl = 'assignments.reaktor.com/birdnest'

const getAll = () => {
    const request = axios.get(`${baseUrl}/drones`)
    return request.then(response => response.data)
  }

export default getAll
