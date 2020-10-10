import React, { lazy, Suspense } from "react";
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";

const PageList = lazy(() => import("components/pages/PageList"));
const PageDetail = lazy(() => import("components/pages/PageDetail"));

const Router = withRouter(({ location, history }: RouteComponentProps) => {
  return (
    <React.Fragment>
      <Suspense fallback={<div></div>}>
        <Switch location={location}>
          <Route path={"/user/:username"} component={PageList} />
          <Route exact path={"/users"} component={PageDetail} />
          <Redirect from={"/"} to={"/users"} exact />
          <Redirect to="/404" />
        </Switch>
      </Suspense>
    </React.Fragment>
  );
});

export default Router;