import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import OrderList from './components/Dashboard/OrdersList/OrderList';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import Order from './components/Dashboard/Order/Order';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageServicesTable from './components/Dashboard/ManageServicesTable/ManageServicesTable';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import Review from './components/Dashboard/Review/Review';
import ManageOrders from './components/Dashboard/ManageOrders/ManageOrders';

export const UserContext = createContext()
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({})
  return (
    <UserContext.Provider value={[userLoggedIn, setUserLoggedIn]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <PrivateRoute path="/orderlist">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/addservices">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/order/:ID">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/manageservices">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/manageorders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>


        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
