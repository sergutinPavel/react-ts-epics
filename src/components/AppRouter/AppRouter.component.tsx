// libs
import * as React from "react";
import {Redirect, Route, Switch} from "react-router";
// pages
import DashboardComponent from "../../pages/Dashboard/Dashboard.component";
import HomeComponent from "../../pages/Home/Home.component";

class AppRouterComponent extends React.Component<any, any> {
  public render() {
    // console.warn('process.env', process.env);
    return (
      <>
        <Switch>
          <Redirect from="/" to="/dashboard" exact={true} />
          <Route path="/dashboard" component={DashboardComponent} />
          <Route path="/home" component={HomeComponent} />
          {/*<Route path="/login" component={SignInPage} />*/}
          {/*<PrivateRoute path="/" component={ProtectedContent} />*/}
          <Route component={HomeComponent} />
        </Switch>
      </>
    );
  }
}

export default AppRouterComponent;
