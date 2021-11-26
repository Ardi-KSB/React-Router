import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Product from "./components/Product";
import NotFound404 from "./components/NotFound404";
import Header from "./components/Header";

function App() {
  let getIsLogin = localStorage.getItem("isLogin");
  let dataIsLogin = JSON.parse(getIsLogin);
  console.log(dataIsLogin);
  return (
    <Router>
        <Header />
      <Switch>
        <Route exact path="/" ><Home /></Route>
        <Route path="/login" ><Login /></Route>
        <Route path="/register" ><Register /></Route>
        <Route path="/profile" >{(dataIsLogin = true ? <Profile /> : <Redirect to="/Login" />)}</Route>
        <Route path="/product" ><Product /></Route>
        <Route path="/:notfound404"><NotFound404 /></Route>
        </Switch>
    </Router>
  );
}

export default App;
