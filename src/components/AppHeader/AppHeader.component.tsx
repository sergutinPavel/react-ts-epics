import * as React from "react";
// import {NavLink} from "react-router";
// import {Link} from "react-router-dom";
import { NavLink } from 'react-router-dom';

class AppHeaderComponent extends React.Component<any, any> {
  render() {
    return (
      <header className={"app-layout__header"}>
        {/*<span className="mdi mdi-airballoon" />*/}
        <NavLink className={"btn btn-outline-primary"}
                 to="/home"
                 activeClassName={"active"}>Home</NavLink>
        <NavLink className={"btn btn-outline-primary"}
                 to="/dashboard"
                 activeClassName={"active"}>Dashboard</NavLink>
      </header>
    );
  }
};

export default AppHeaderComponent;
