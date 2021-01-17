import { Provider } from 'react-redux';

import Tutorial from './components/Tutorial';

import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Tutorial />
    </Provider>
  );
}
