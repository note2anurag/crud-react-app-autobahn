import axios from 'axios'
export const read = (url, configs) => axios.get(url, configs)

export const create = (url, data, configs = {}) =>
  axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...configs
  })

export const update = (url, data, configs) =>
  axios.put(url, data, {
    headers: {
      'Content-Type': 'application/json'
    },
    ...configs
  })