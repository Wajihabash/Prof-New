import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Blog from "./Blog";


function Main() {
  return (
    <HashRouter>
      <div>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <NavLink to="/" className="nav-link active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Work" className="nav-link active">My Work</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Contact" className="nav-link active">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Blog" className="nav-link active">Blog</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route exact path="/" component={About} />
          <Route path="/Work" component={Work} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Blog" component={Blog} />
        </div>
      </div>
    </HashRouter>
  );
}

export default Main;
