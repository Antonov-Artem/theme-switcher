import { Provider } from 'react-redux';
import { HomePage } from 'pages/home';
import { store } from './store';
import './index.css';

export const App = () => (
  <Provider store={store}>
    <HomePage />
  </Provider>
);
