import { render } from '@testing-library/react';
import { Provider } from 'react-redux'
import store from '../store/store'
import AddPost from '../pages/AddPost';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockedUsedNavigate,
}));
test('renders the AddPost Component', () => {
  render(<Provider store={store}><AddPost /><AddPost /></Provider>);
});