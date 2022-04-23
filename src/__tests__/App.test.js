import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/configureStore';
import App from '../components/App';

it('renders correctly', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      ,
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
