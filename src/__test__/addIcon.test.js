import { render, screen, fireEvent} from '@testing-library/react';
import AddIcon from '../components/AddIcon';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockedUsedNavigate,
}));
test('renders the AddIcon Component', () => {
  render(<AddIcon />);
  const button = screen.getByText('Add Post')
  fireEvent.click(button)
});
 