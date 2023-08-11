import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HomePage } from 'pages/home';
import { store } from './store';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <HomePage />
  </Provider>
);
