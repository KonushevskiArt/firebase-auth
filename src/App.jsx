import AppRouter from './Router';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import './firebase.js';

function App() {

  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  )
}

export default App
