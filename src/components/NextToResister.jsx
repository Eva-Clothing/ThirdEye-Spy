import dotenv from "dotenv";
import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { data } from "jquery";
// import { level } from "../redux";

dotenv.config();
console.log(process.env.LEVEL1);

const NextToResister = () => {
  const br = "/n";
  const level = localStorage.getItem("level");
    if (level == 1){
      return (
        <div className="home-content">
          <div class="row justify-content-center">
            <div>
              <h3>You are the Admin. Your access code: <strong>{localStorage.getItem("level1")}</strong></h3>
              <h3>Level 2 Access code: <strong>{localStorage.getItem("level2")}</strong></h3>
              <h3>Level 3 Access code: <strong>{localStorage.getItem("level3")}</strong></h3>
              <div style={{paddingTop: "2rem"}}>
                <Link to="/Home" class="btn btn-warning btn-lg btn-shadow" role="button">Proceed</Link>
              </div>
            </div>  
          </div>
        </div>
      ); 
    } else {
      return (
        <div className="not-found">
          <h1 className="display-1" style={{marginBottom: "10000rem"}}>Sorry...You can't see/make the Changes</h1>
        </div>
      );
    }
}

export default NextToResister;