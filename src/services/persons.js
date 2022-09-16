import axios from 'axios'
const baseUrl = 'https://secure-chamber-91844.herokuapp.com/api/persons'
//const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  const request =  axios.post(baseUrl, newObject)
  return request.then(response => response.data).catch(console.log('caught errror'))
}

const update = (id, newObject) => {
  console.log('this is the object to update', newObject)
  console.log('this is the update id ', id)
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data).catch(console.log('caught errror'))
}
const remove = (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)
    console.log('this is the id ', id)
    return request.then(response => response.data).catch(console.log('caught delete error'))
}
export default { getAll, create, update, remove}