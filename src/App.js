import "./App.css";
import { Provider } from "react-redux";
import SetPages from "./SetPages";
import store from "./redux/Toolkit";

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
