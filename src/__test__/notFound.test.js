import { render, screen, fireEvent} from '@testing-library/react';
import NotFound from '../pages/NotFound';
const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
 useNavigate: () => mockedUsedNavigate,
}));
test('renders the NotFound Component', () => {
  render(<NotFound />);
  const button = screen.getByText('Go Back')
  fireEvent.click(button)
});