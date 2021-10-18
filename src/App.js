import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Componets/NavBar/NavBar";
import Home from "./Componets/HomePage/Home/Home";
import NotFound from "./Componets/NotFound/NotFound";
import DetailsPage from "./Componets/DetailsPage/DetailsPage";
import About from "./Componets/HomePage/About/About";
import Services from "./Componets/HomePage/Services/Services";
import Locations from "./Componets/HomePage/Locations/Locations";
import Footer from "./Componets/Footer/Footer";
import Signup from "./Componets/Signup/Signup";
import Login from "./Componets/Login/Login";
import Contact from "./Componets/HomePage/Contact/Contact";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Componets/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/location">
              <Locations></Locations>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/signin">
              <Login></Login>
            </Route>
            <PrivateRoute path="/service/:key">
              <DetailsPage></DetailsPage>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
