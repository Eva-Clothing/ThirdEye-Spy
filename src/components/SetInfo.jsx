import React, { Component } from "react";
import axios from "axios";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";

class SetInfo extends Component {
  state = {
    selectDay: "",
    selectRoomNo: "",
    selectPerson: "",
    period: "",
    minEntryTime: "",
    maxEntryTime: "",
    minExitTime: "",
    maxExitTime: "",
  };

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
      selectDay: this.state.selectDay,
      selectRoomNo: this.state.selectRoomNo,
      selectPerson: this.state.selectPerson,
      period: this.state.period,
      minEntryTime: this.state.minEntryTime,
      maxEntryTime: this.state.maxEntryTime,
      minExitTime: this.state.minExitTime,
      maxExitTime: this.state.maxExitTime,
    };

    const level = localStorage.getItem("level");
    var requestLevel = "0";
    let person = this.state.selectPerson;
    // console.log(typeof(person));
    if (person === "rupam") {
      requestLevel = "3";
    } else if (person === "lin") {
      requestLevel = "2";
    } else {
      requestLevel = "1";
    }

    console.log(requestLevel);
    if(parseInt(requestLevel)>parseInt(level)) {
      axios({
        url: "/api/update",
        method: "POST",
        data: payload,
      })
        .then(() => {
          console.log("Data send to the dataBase");
        })
        .catch(() => {
          console.log("Internal server Error.....!!!");
        });
  
        alert("Data has successfully updated...");
    } else {
      this.props.history.replace("NotAuth");
    }
  };

  render() {
    console.log("state : ", this.state);

    return (
      <form>
        <div className="form-elements">
          <div className="all-elements">
            <select
              className="form-control btn-shadow"
              name="selectDay"
              onChange={this.handleChange}
              value={this.state.value}
            >
              <option>Select Day</option>
              <option value="sunday">Sunday</option>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday">Saturday</option>
            </select>
          </div>
          <div className="all-elements">
            <select
              className="form-control btn-shadow"
              name="selectRoomNo"
              onChange={this.handleChange}
              value={this.state.value}
            >
              <option>Select Room No.</option>
              <option value="room-1">Room-1</option>
            </select>
          </div>
          <div className="all-elements">
            <select
              className="form-control btn-shadow"
              name="selectPerson"
              onChange={this.handleChange}
              value={this.state.value}
            >
              <option>Select Person</option>
              <option value="rupam">Rupam</option>
              <option value="lin">Lin</option>
              <option value="biden">Biden</option>
            </select>
          </div>
          <div className="all-elements">
            <select
              className="form-control btn-shadow"
              name="period"
              onChange={this.handleChange}
              value={this.state.value}
            >
              <option>Period</option>
              <option value="0">Period-1</option>
              <option value="1">Period-2</option>
              <option value="2">Period-3</option>
              <option value="3">Period-4</option>
              <option value="4">Period-5</option>
            </select>
          </div>
          <div className="form-group all-elements">
            <label for="exampleFormControlInput1">Entry time</label>
            <input
              className="form-control btn-shadow"
              type="text"
              placeholder="Enter with proper formatting. EX- '14:50:00' "
              name="minEntryTime"
              onChange={this.handleChange}
              value={this.state.minEntryTime}
            />
            <label for="exampleFormControlInput1">to</label>
            <input
              className="form-control btn-shadow"
              type="text"
              placeholder="Enter with proper formatting. EX- '14:50:00' "
              name="maxEntryTime"
              onChange={this.handleChange}
              value={this.state.maxEntryTime}
              style={{ marginBottom: "5rem" }}
            />
            <label for="exampleFormControlInput1">Exit time</label>
            <input
              className="form-control btn-shadow"
              type="text"
              placeholder="Enter with proper formatting. EX- '14:50:00' "
              name="minExitTime"
              onChange={this.handleChange}
              value={this.state.minExitTime}
            />
            <label for="exampleFormControlInput1">to</label>
            <input
              className="form-control btn-shadow"
              type="text"
              placeholder="Enter with proper formatting. EX- '14:50:00' "
              name="maxExitTime"
              onChange={this.handleChange}
              value={this.state.maxExitTime}
            />
          </div>
        </div>
        <div className="btn-in-form">
          <button type="button" onClick={this.submit} class="btn btn-warning btn-lg btn-shadow">
            Change
          </button>
        </div>
      </form>
    );
  }
}

export default SetInfo;
