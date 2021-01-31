import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {Link} from "react-router-dom";

const Entry = () => {
    localStorage.setItem("level", "0");
    return (
        <div className="home-content">
          <div class="row justify-content-center">
            <Link to="/Resister" class="btn btn-warning btn-lg btn-shadow mr-4" role="button">Sign Up</Link>
            <Link to="/Login" class="btn btn-warning btn-lg btn-shadow" role="button">Login</Link>
          </div>
        </div>
    );
}

export default Entry;