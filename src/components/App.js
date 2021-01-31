import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SeeInfo from "./SeeInfo";
import SetInfo from "./SetInfo";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";
import NotFound from "./NotFound";
import Entry from "./Entry";
import Login from "./Login";
import Resister from "./Resister";
import Wrong from "./Wrong";
import NextToResister from "./NextToResister";
import NotAuth from "./NotAuth";
// import Resistertr from "./Resistertr";

// import { Provider } from "react-redux";
// import store from "../redux/store";


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Entry} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/SeeInfo" component={SeeInfo} />
          <Route exact path="/SetInfo" component={SetInfo} />
          <Route exact path="/AboutUs" component={AboutUs}/>
          <Route exact path="/OurTeam" component={OurTeam}/>
          <Route exact path="/Resister" component={Resister}/>
          <Route exact path="/NextToResister" component={NextToResister}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Wrong" component={Wrong} />
          <Route exact path="/NotAuth" component={NotAuth}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
