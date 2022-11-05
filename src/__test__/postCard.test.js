import { render} from '@testing-library/react';
import PostCard from '../components/PostCard';
import { Provider } from 'react-redux'
import store from '../store/store'
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));
test('renders the PostCard Component', () => {
  render(<Provider store={store}><PostCard /></Provider>);
});