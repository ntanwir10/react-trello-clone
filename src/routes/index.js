import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TrelloBoard from "../components/TrelloBoard";
import Home from "../components/Home";
import Navbar from "../components/navbar/Navbar";

const AppRouter = () => {
    return (

        <Router>
            <div>
                <Navbar></Navbar>
                <Route path="/" exact component={Home} />
                <Route path="/:boardID" component={TrelloBoard} />
            </div>
        </Router>
    );
};

export default AppRouter;
