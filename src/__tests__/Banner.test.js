import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import store from '../store/configureStore'
import Banner from '../components/Banner';

describe('Banner is rendered', () => {
  test('Check text in documents', () => {
    render(
      <Provider store={store}>
        <Banner />
      </Provider>,
    );
    expect(screen.getByText('Data provided by')).toBeInTheDocument();
  });
});