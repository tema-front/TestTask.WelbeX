import { Provider } from 'react-redux'
import { Store } from './store/store.js';
import { Router } from './components/Router';
import './styles/style.scss';

function App() {
  return (
    <Provider store={Store}><Router /></Provider>
  );
}

export default App;