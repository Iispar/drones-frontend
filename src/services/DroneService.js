import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAll = async () => {
  const request = await axios.get(baseUrl,
    {
      headers: {
        'Target-URL': 'https://assignments.reaktor.com/birdnest/drones'
      }
    }
  )
  return request.data
}

const getPilot = async (serialNumber) => {
  const request = await axios.get(baseUrl,
    {
      headers: {
        'Target-URL': `https://assignments.reaktor.com/birdnest/pilots/${serialNumber}`
      }
    }
  )
  return request.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, getPilot }
