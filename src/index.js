/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import LoginPage from "views/containers/LoginPage.js";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartPage from "views/containers/CartPage";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Route path="/cart-page" render={props => <CartPage {...props} />} />
        <Route path="/index" render={props => <Index {...props} />} />
        <Redirect to="/login-page" />
        <Redirect from="/" to="/login-page" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
