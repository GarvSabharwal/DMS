import React, { Component } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";
import "./login.css";
const LoginWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 500px;
  margin-top: -10em; /*set to a negative number 1/2 of your height*/
  margin-left: -18em; /*set to a negative number 1/2 of your width*/
  border: 1px solid #ccc;
  background-color: #f3f3f3;
  padding: 50px;
  padding-right: 1px;
`;

export default class SignInForm extends Component {
  render() {
    return (
      <LoginWrapper className="FormCenter">
        <div className="FormField">
          <label className="FormField__Label" htmlFor="email">
            E-Mail Address
          </label>
          <input
            type="email"
            id="email"
            className="FormField__Input"
            placeholder="Enter your email"
            name="email"
          />
        </div>

        <div className="FormField">
          <label className="FormField__Label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="FormField__Input"
            placeholder="Enter your password"
            name="password"
          />
        </div>

        <div className="FormField Middle">
          <Link to={ROUTES.HOME} className="FormField__Button mr-20">
            Login
          </Link>
        </div>
      </LoginWrapper>
    );
  }
}
