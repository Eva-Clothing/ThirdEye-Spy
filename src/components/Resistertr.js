import React, { component } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import { useDispatch } from "react-redux";
import Login from "./Login";
import { level } from "../redux";


function Resistertr() {
   const state = {
        email: "",
        password: "",
      };
      
    const  handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
      
        this.setState({
          [name]: value,
        });
      };
      
    const  submit = (event) => {
        event.preventDefault();
      
        const payload = {
          email: this.state.email,
          password: this.state.password,
        };
      
        axios({
          url: "api/resister",
          method: "POST",
          data: payload,
        })
          .then(() => {
            console.log("Data has sent to the Signup route");
            // console.log(response);
            this.props.history.replace("Home");
          })
          .catch(() => {
            console.log("Sorry......Internal Server Error...!!");
          });
      };  
  const dispatch = useDispatch();

  return (
    <form>
      <div
        className="all-elements-for-login-signup"
        style={{ paddingTop: "1rem" }}
      >
        <h3>Sign In</h3>
      </div>

      <div
        className="form-group all-elements-for-login-signup"
        style={{ paddingTop: "2rem" }}
      >
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>

      <div className="form-group all-elements-for-login-signup">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          name="password"
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>

      <div className="all-elements">
        <button
          type="submit"
          className="btn btn-warning btn-lg btn-shadow "
          onClick={() => dispatch(level(1))}
          style={{ marginBottom: "7.2rem" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Resistertr;
