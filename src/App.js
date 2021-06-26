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
            <AddBlog/>
        </Route>
        <Route path='/manageBlog'>
            <ManageBlog/>
        </Route>
        <Route path='/readMore'>
            <ReadFullBlog/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
