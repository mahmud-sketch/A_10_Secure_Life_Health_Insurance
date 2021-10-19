import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header/Header';
import Policies from './Policies/Policies';
import PolicyDetails from './PolicyDetails/PolicyDetails';
import Subscribe from './Subscribe/Subscribe';
import Claims from './Claims/Claims';
import NotFound from './NotFound/NotFound';
import Footer from './Footer/Footer';
import Home from './Home/Home';
import Login from './Login/Login';
import Registration from './Registration/Registration';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/policies'>
              <Policies></Policies>
            </Route>
            <PrivateRoute path='/details/:id'>
              <PolicyDetails></PolicyDetails>
            </PrivateRoute>
            <Route path='/subscribe'>
              <Subscribe></Subscribe>
            </Route>
            <Route path='/claim'>
              <Claims></Claims>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
            <Route path='/*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
