import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddBlog from './Components/Admin/AddBlog';
import ManageBlog from './Components/Admin/ManageBlog/ManageBlog';
import ReadFullBlog from './Components/ReadFullBlog/ReadFullBlog';
import CreateAccount from './Components/SignUpSignIn/LoginUser/CreateAccount';
import Login from './Components/SignUpSignIn/LoginUser/Login';
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
          <Route path='/addBlog'>
              <AddBlog/>
          </Route>
          <Route path='/manageBlog'>
              <ManageBlog/>
          </Route>
          <Route path='/readMore'>
              <ReadFullBlog/>
          </Route>
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
