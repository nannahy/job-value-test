import './App.css';
import SetPages from './SetPages';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SetPages />
      </div>
    </Provider>
  );
}

export default App;
