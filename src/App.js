import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Users from "./pages/Users";
import NotFoundPage from "./pages/NotFoundPage";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
