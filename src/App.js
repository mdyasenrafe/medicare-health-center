import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Componets/NavBar/NavBar";
import Home from "./Componets/HomePage/Home/Home";
import NotFound from "./Componets/NotFound/NotFound";
import DetailsPage from "./Componets/DetailsPage/DetailsPage";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service/:key">
            <DetailsPage></DetailsPage>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
