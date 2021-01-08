import React from "react"
import { useStateValue } from './StateProvider';
import './App.css';
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard"
import './Components/DashboardStyle.css'
import { Route, Switch, Redirect } from "react-router-dom";
import Sell from "./Components/Sell/Sell";
import { useHistory } from "react-router-dom";
import Wishlist from "./Components/Dashboard/Wishlist";
import Cart from "./Components/Dashboard/Cart";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // const user = "user"
  const history = useHistory();
  // Dashboard
  const handleDash = () => {
      history.push({
          pathname: "/"
          
        });
  };
// Wishlist
const handleWish = () => {
  history.push({
      pathname: "/wish"
      
    });
};
// Cart
const handleCart = () => {
  history.push({
      pathname: "/cart"
      
    });
};

  return (
    <div className="app">
      {/* Header */}
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        <div className="">
          <button onClick={handleDash} class="btn btn-outline-info col">Home</button>
          <button onClick={handleWish} class="btn btn-outline-warning col">Wishlist</button>
          <button onClick={handleCart} class="btn btn-outline-success col">Cart</button>
        </div>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search Your Item" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>

      {!user ? (
        <Login />
      ) : (
          <>
            <div className="app__body">
              <Switch>
              <Route path="/" exact render={(props)=> <Dashboard /> } />
              <Route path="/sell" exact render={(props)=> <Sell /> } />
              <Route path="/wish" exact render={(props)=> <Wishlist /> } />
              <Route path="/cart" exact render={(props)=> <Cart /> } />
              
              </Switch>
            </div>
          </>
        )}
    </div>
  );
}

export default App;
