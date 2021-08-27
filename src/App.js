import "./App.css";
import { Provider } from "react-redux";
import SetPages from "./SetPages";
import store from "./redux/store";

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
