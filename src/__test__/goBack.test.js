import { render, screen, fireEvent} from '@testing-library/react';
import GoBack from '../components/GoBack';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockedUsedNavigate,
}));
test('renders the GoBack Component', () => {
  render(<GoBack />);
  const button = screen.getByText('Go Back')
  fireEvent.click(button)
});