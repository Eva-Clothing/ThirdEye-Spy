import React, { Component } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import { useDispatch } from "react-redux";
import Login from "./Login";
// import { level } from "../redux";

class Resister extends Component {
  state = {
      email: "",
      password: ""
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
          email: this.state.email,
          password: this.state.password
          
      };

      axios({
          url: "api/resister",
          method: "POST",
          data: payload
      })
      .then((response) => {
        // console.log("Data has sent to the Signup route");
        // console.log(response.data);
        if (response.data == "1") {
          // console.log(response.data);
          localStorage.setItem("level", "1");
          localStorage.setItem("level1", "admin@12345");
          localStorage.setItem("level2", "admin@12345@level2");
          localStorage.setItem("level3", "admin@12345@level3");

          this.props.history.replace("NextToResister");
        } else {
          this.props.history.replace("Wrong");
        }
          
      })
      .catch(() => {
          console.log("Sorry......Internal Server Error...!!");
      });
  }
  render() {
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
            onClick={this.submit}
            style={{ marginBottom: "7.2rem" }}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

// export default connect (mapStateToProps, mapDispatchToProps) (Resister);

export default Resister;
