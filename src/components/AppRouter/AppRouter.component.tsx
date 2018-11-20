// libs
import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
// pages
import AppHeaderComponent from "../AppHeader/AppHeader.component";
import AppAuthComponent from "../AppAuth/AppAuth.component";
import NotFoundComponent from "../../pages/NotFound/NotFound.component";
import DashboardComponent from "../../pages/Dashboard/Dashboard.component";
import HomeComponent from "../../pages/Home/Home.component";

const RootRoutes: React.SFC<any> = () => {
  return (
    <>
      <AppHeaderComponent />
      <Switch>
        <Route path="/dashboard" component={DashboardComponent} exact={true} />
        <Route path="/home" component={HomeComponent} exact={true} />
        <Route path="/not-found" component={NotFoundComponent} />
        <Redirect to="/not-found" />
      </Switch>
    </>
  );
};

const AppRouterComponent: React.SFC<any> = (props?) => {
  console.warn('process.env', process.env, props);
  return (
    <div className={"app-layout"}>
      <Switch>
        <Redirect from="/" to="/dashboard" exact={true} />
        <Route path="/auth" component={AppAuthComponent} />
        <Route path="/" component={RootRoutes} />
        {/*<PrivateRoute path="/" component={ProtectedContent} />*/}
      </Switch>
    </div>
  );
};

export default AppRouterComponent;
