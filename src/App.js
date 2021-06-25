import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Admin from './Components/Admin/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
        <Route path='/home'>
            <Home/>
        </Route>
        <Route path='/addBlog'>
            <Admin/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
