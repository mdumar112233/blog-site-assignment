import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import ManageBlog from './Components/Admin/ManageBlog/ManageBlog';
import ReadFullBlog from './Components/ReadFullBlog/ReadFullBlog';
import CreateAccount from './Components/SignUpSignIn/LoginUser/CreateAccount';
import Login from './Components/SignUpSignIn/LoginUser/Login';
import Admin from './Components/Admin/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
              <Home/>
          </Route>
          <Route path='/home'>
              <Home/>
          </Route>
          <PrivateRoute path='/admin'>
              <Admin/>
          </PrivateRoute>
          <Route path='/manageBlog'>
              <ManageBlog/>
          </Route>
          <PrivateRoute path='/readMore/:_id'>
              <ReadFullBlog/>
          </PrivateRoute>
          <Route path='/login'>
              <Login/>
          </Route>
          <Route path='/signUp'>
              <CreateAccount/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
