import React, { Component } from "react";
import axios from "axios";

class SeeInfo extends Component {
  state = {
    allData: [],
    unknown: []
  };

  componentDidMount = () => {
    this.getAllData();
    this.getImages()
    //setInterval(this.getAllData, 1000)  // auto refreshing feature..
  };

  getAllData = () => {
    axios
      .get("/api")
      .then((response) => {
        const data = response.data;
        this.setState({ allData: data });
        console.log("data has been recived");
      })
      .catch((error) => {
        console.log("Error Retriving Data");
      });
  };

  getImages = () => {
    axios.get("/api/unknown")
    .then((response) => {
      const data = response.data
      this.setState({ unknown: data })
      console.log("Images has been retrived");
    })
    .catch((error) => {
      console.log("Error retriving Images");
    })
  }

  displayData = (allData) => {
    if (!allData.length) {
      return (
        <div className="showing-data-no-prob">
          <h3>Everything looks good. No prob yet.</h3>
        </div>
      );
    } else {
      const level = localStorage.getItem("level");
      var newall = allData.filter(function (all) {
        return parseInt(level) < parseInt(all.level);
      });
      console.log(allData);
      return newall.map((all, index) => (
        <>
          <div className="showing-data">
            <div className="showing-data-name">
              <h3>{all.name}</h3>
            </div>
            {all.notTotallyCorrect.map((allall, index) => (
              <div className="showing-data-details">
                <p>
                  Period Started : {allall.startingTime} || Period Ended :{" "}
                  {allall.endingTime} || Attended : {allall.timeCovered} min.
                </p>
              </div>
            ))}
          </div>
        </>
      ));
    }
  };

  displayImages = (unknown) => {
    const level = localStorage.getItem("level");
    var levelInt = parseInt(level)
    console.log(levelInt);
    if(levelInt === 1) {
      if (!unknown.length) {
        return (
          <div className="showing-data-no-prob">
            <h3>Everything looks good. No prob yet.</h3>
          </div>
        );
      } else {
        return unknown.map((all, index) => (
          <>
            <div className="showing-data">
              <div className="showing-data-name">
                <h5>{all.time}</h5>
              </div>
              <div className="showing-data-details">
                <img src={all.imageURL}></img>
              </div>
            </div>
          </>
        ))
      }
    }
  }

  render() {
    const level = localStorage.getItem("level");
    if (level == "0") {
      return (
        <div className="not-found">
          <h1 className="display-1" style={{ marginBottom: "10000rem" }}>
            Sorry...You can't see/make the Changes
          </h1>
        </div>
      );
    } else {
      return (
        <div className="abc">
          {this.displayData(this.state.allData.reverse())}
          {this.displayImages(this.state.unknown.reverse())}
        </div>
      );
    }
  }
}

export default SeeInfo;
