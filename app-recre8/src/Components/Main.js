import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import About from "./About";
  import Work from "./Work";
  import Contact from "./Contact";
  import Blog from "./Blog";


class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1> Welcome  </h1>
                    <ul className="header">
                        <li><NavLink to="/">About</NavLink></li>
                        <li><NavLink to="/Work">My Work</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                        <li><NavLink to="/Blog">Blog</NavLink></li>

                    </ul>
                    <div className="content">
                        <Route exact path="/" component={About}/>
                        <Route path="/Work" component={Work}/>
                        <Route path="/Contact" component={Contact}/>
                        <Route path="/Blog" component={Blog}/>
                    </div>

                </div>

            </HashRouter>
            
        );
    }
}
export default Main;