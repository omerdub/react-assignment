import { Provider } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UsersList from './components/usersListIndex/usersList';
import UserInfo from './components/userInfoIndex/userInfo';
import store from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/home">
              <UsersList />
            </Route>
            <Route path="/userInfo">
              <UserInfo />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
