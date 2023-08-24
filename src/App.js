import React from "react";
import Nav from './Nav';
import Home from './Home';
import Skills from './Skills';
import './App.css'

import {
    BrowserRouter as Router,
} from "react-router-dom";
import Portfolio from "./Portfolio";
const App = () => {
    return (
        <>
        <Router>
            <Nav/>
            <Home/>
        </Router>
        </>
    );
}

export default App;
