import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";
import Home from "../components/Home";
import Navbar from "../components/navbar/Navbar";
import About from "../components/pages/About";

const AppRouter = () => {
    return (

        <Router>
            <Fragment>
                <Navbar></Navbar>
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/" exact component={Home} />
                    <Route path="/:boardID" component={TrelloBoard} />
                </Switch>

            </Fragment>
        </Router>
    );
};

export default AppRouter;
