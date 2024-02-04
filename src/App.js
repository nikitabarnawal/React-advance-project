import "./App.css";
import { Provider } from "react-redux";
import UserList from "./components/UserList";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
