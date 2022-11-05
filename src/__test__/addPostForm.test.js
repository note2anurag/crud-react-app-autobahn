import { render, screen, fireEvent } from '@testing-library/react';
import * as reactRedux from 'react-redux'
import { Provider } from 'react-redux'
import store from '../store/store'
import AddPostForm from '../components/AddPostForm';
let useDispatchSpy
const mockDispatchFn = jest.fn()

beforeAll(() => {
  useDispatchSpy = jest.spyOn(reactRedux, 'useDispatch')
  useDispatchSpy.mockReturnValue(mockDispatchFn)
})

beforeEach(() => {
  useDispatchSpy.mockClear()
})
test('renders the AddPostForm Component', () => {
  const dummyDispatch = jest.fn()
  useDispatchSpy.mockReturnValue(dummyDispatch)
  render(<Provider store={store}><AddPostForm /></Provider>);
  const button = screen.getByTestId('add-button')
  fireEvent.click(button)
});