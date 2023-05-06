import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Search from "./pages/search/Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import axios from "axios";

function App() {
  const { user } = useContext(AuthContext);
  axios.defaults.baseURL = "http://localhost:8800/api/";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
          </Route>
          <Route  path = "/search" >
            <Search />
            </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
