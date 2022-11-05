import { jest, it, expect } from '@jest/globals'
import axios from 'axios'
import { read, create, update } from '../utils/requestUtils'
jest.mock('axios')

it('fetch should be equal to axios.get', () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const fetchMethod = read(url)
  expect(fetchMethod).toEqual(axios.get(url))
})

it('post should be equal to axios.post', () => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const data = { 
    title: 'testing title', 
    content: 'testing content' 
}
  const postMethod = create(url, data)
  expect(postMethod).toEqual(axios.post(url, data))
})

it('edit should be equal to axios.edit', () => {
  const url = 'https://jsonplaceholder.typicode.com/posts/1'
  const data = { 
    id: 1,
    title: 'testing title', 
    content: 'testing content' 
}
  const postMethod = update(url, data)
  expect(postMethod).toEqual(axios.put(url, data))
})

