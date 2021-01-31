import React, { Component } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";

class Login extends Component {
     state = {
         id: ""
     }

     handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        });
     };

     submit = (event) => {
         event.preventDefault();

         const payload = {
             id: this.state.id
         };

         axios({
            url: "api/login",
            method: "POST",
            data: payload
         })
         .then((response) => {
             console.log("Data has sent to the Login Route");
             if (response.data == "2") {
                  // console.log(response.data);
                  localStorage.setItem("level", "2");
                  this.props.history.replace("Home");
             } else if (response.data == "3") {
                  localStorage.setItem("level", "3");
                  this.props.history.replace("Home");
             } else {
                  this.props.history.replace("Wrong");
             }
         })
         .catch(() => {
             console.log("Sorry.......Internal Server Error...!!");
         });
     };

  render() {
    return (
      <form>
        <div
          className="all-elements-for-login-signup"
          style={{ paddingTop: "1rem" }}
        >
          <h3>Login</h3>
        </div>

        <div
          className="form-group all-elements-for-login-signup"
          style={{ paddingTop: "2rem" }}
        >
          <label>Login ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter ID"
            name="id"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </div>

        <div className="all-elements">
          <button
            type="submit"
            className="btn btn-warning btn-lg btn-shadow "
            onClick={this.submit}
            style={{ marginBottom: "18.2rem" }}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Login;
