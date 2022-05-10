import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const Login = React.lazy(() => import("../views/pages/login/Login"));
const Register = React.lazy(() => import("../views/pages/register/Register"));
const Page404 = React.lazy(() => import("../views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("../views/pages/page500/Page500"));
const DefaultLayout = React.lazy(() => import("../layout/DefaultLayout"));
const Dashboard = React.lazy(() => import("../views/dashboard/Dashboard"));

export default function Routers() {
  return(
      <Router>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />

            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
            <Route
              exact
              path="/"
              name="Dashboard"
              render={(props) => <Dashboard {...props} />}
            />

          </Switch>
      </Router>
  )}
