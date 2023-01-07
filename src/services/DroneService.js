import axios from 'axios'
const baseUrl = 'https://twilight-leaf-5495.fly.dev/'

/**
 * get the already filtered data of the drones from the backend.
 */
const getAll = async () => {
  const request = await axios.get(baseUrl)
  return request.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }
