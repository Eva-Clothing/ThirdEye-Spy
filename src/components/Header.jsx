import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <header>
          <Link to="/"  style={{textDecoration: "none"}} ><h1><img src="https://lh3.googleusercontent.com/9z4p4_aAYq0HNsnhCA5PpbexgW-Ftaag9xvU-f6BDrfwsXH0pociLKSP8C13IwUuICbMdfqolk3ToapXLhcI7zC1jzR0kUKyxR0nc_xcsjduquT7zu2YRwtK_mipCpAe6vacmfpCcuIH-J6j1tdAqkVgyJug6-Zm2Igvz_vsdTJUTF2kvvnFrwXuGwbtAKB4rXoYDWw47zEfacvR1RUtsKqxZMqZWA53drVtRATyCNU3-8hKTATj5aAOzRK-r7al9T1Ei6YUL9mvTEUD0LQqd41JtWgPC-QqgsUFUnNgLkW1UzErrEQpeSMVDvaPlO8T-zDUjJvqbCXe5j6whke9K3ee4Xy7F-N_Ho1zDdzG8ts0HbdhxS6sf15sAL8DQsgKfw4fN6TKky_1ApbIaTfC8foVgjnelLrn5VC331nPs_MbnryEfg9CV6kd11d1W9ND5h4vTCzlJsvWPwji2T5jGw8xOn9ZubAIZZBI5OPEVBsfyQfwgtQp7hygCr2G5x6lVJMtf2b5RN-tvh_X19iVr-LYtyUEsOyvx6AmUTrmJxDr9wnuhjIY7pmLSh-_AVjiVLZOR-F6ldeUV7VHTpJnsFfFS_M0Mc5S4E0jleYbeeTixR6TMRKkqrqAgOFX7yHzTOo1F7eB8gJwJPknBp6Yq_NZ5eF_6Aby47I1mNPWtIF6cT9ihM1RkWQ546eDvw=w156-h165-no?authuser=0" width="50" height="60"></img> THIRD-EYE</h1></Link>
        </header>
    );
};

export default Header;