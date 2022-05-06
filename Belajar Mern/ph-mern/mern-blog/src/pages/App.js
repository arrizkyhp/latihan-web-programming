import { Provider } from 'react-redux';
import { Switch, store } from '../config';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Switch />
    </Provider>
  );
}

export default App;
