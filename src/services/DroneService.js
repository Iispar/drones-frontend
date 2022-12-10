import axios from 'axios'
const baseUrl = 'http://localhost:3001'

const getAll = () => {
	const request = axios.get(baseUrl,
		{
			headers: {
				'Target-URL': 'https://assignments.reaktor.com/birdnest/drones',
			}
		}
	);
    return request.then(response => response.data)
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }