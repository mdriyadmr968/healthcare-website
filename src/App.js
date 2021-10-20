import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import AuthProvider from './contexts/AuthProvider';
import Details from './Details/Details';
import About from './Pages/About/About';
import Article from './Pages/Articles/Article';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Services from './Pages/Services/Services';
import Notfound from './Pages/Shared/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/services">
              <Services></Services>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/article">
              <Article></Article>
            </Route>
            <PrivateRoute path="/details/:deatilsId">
              <Details></Details>
            </PrivateRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
