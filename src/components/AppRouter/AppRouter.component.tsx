// libs
import * as React from "react";
// import {Redirect, Route, Switch} from "react-router";
import {Redirect, Route, Switch} from "react-router-dom";
// pages
import AppHeaderComponent from "../AppHeader/AppHeader.component";
import AppAuthComponent from "../AppAuth/AppAuth.component";
import NotFoundComponent from "../../pages/NotFound/NotFound.component";
import DashboardComponent from "../../pages/Dashboard/Dashboard.component";
import HomeComponent from "../../pages/Home/Home.component";


const AppRouterComponent: React.SFC<any> = (props?) => {
  // console.warn('process.env', process.env);
  return (
    <div className={"app-layout"}>
      <AppHeaderComponent />
      <Switch>
        <Redirect from="/" to="/dashboard" exact={true} />
        <Route path="/auth" component={AppAuthComponent} />
        <Route path="/dashboard" component={DashboardComponent} />
        <Route path="/home" component={HomeComponent} />
        {/*<Route path="/login" component={SignInPage} />*/}
        {/*<PrivateRoute path="/" component={ProtectedContent} />*/}
        <Route path="/not-found" component={NotFoundComponent} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default AppRouterComponent;
