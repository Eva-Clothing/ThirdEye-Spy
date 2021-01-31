import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    const date = new Date().getFullYear();
    return(
        <footer>
            <p>Copyright ⓒ {date}</p>
            <p>Made with 💛 by Team Unique</p>
            <Link to="/AboutUs" style={{textDecoration: "none"}} className="aboutAndTeamFooter">project info | </Link>
            <Link to="/OurTeam" style={{textDecoration: "none"}} className="aboutAndTeamFooter">our team</Link>
        </footer>
    );
}

export default Footer;