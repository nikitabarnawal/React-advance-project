import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import UserList from "./components/UserList";

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
