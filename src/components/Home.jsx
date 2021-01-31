import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";
import { Component } from "react";
const Home = () => {
    return (
        <div className="home-content">
          <div class="row justify-content-center">
            <Link to="/SetInfo" class="btn btn-warning btn-lg btn-shadow mr-4" role="button">Set Info</Link>
            <Link to="/SeeInfo" class="btn btn-warning btn-lg btn-shadow" role="button">See Info</Link>
          </div>
        </div>
    );
};

export default Home;