import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Booking from './Components/Booking/Booking';
import NotFound from './Components/NotFound/NotFound';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: ''
  });
  const [data, setData] = useState();

  return (
    <UserContext.Provider value={{ userData: [loggedInUser, setLoggedInUser], places: [data, setData] }} >
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header />
          </Route>
          <Route path='/home'>
            <Header />
          </Route>
          <PrivateRoute path='/destination'>
            <Destination />
          </PrivateRoute>
          <Route path='/booking/:Id'>
            <Booking />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider >
  );
}

export default App;
