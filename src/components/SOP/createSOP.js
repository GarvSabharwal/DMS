import React, { Component } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import * as ROUTES from "../../constants/routes";
import "../Login/login.css";
const LoginWrapper = styled.div`
  border: 1px solid #ccc;
  background-color: #f3f3f3;
  margin-left:120px;
`;
const FormWrapper = styled.div`
  margin:30px 0px 10px 60px;
`;
const SOPwrapper = styled.div``;
const SOPNavbar = styled.ul`
  list-style-type: none;
  margin: 0;
  background-color: #333;
  position: fixed;
  left: 0px;
  top: 0px;
`;
const SOPNavbarlist = styled.li`
  color: white;
  padding: 50px;
  font-size: 3em;
  text-align: center;
  &:hover {
    background-color: #111;
  }
`;
const Sopcontent = styled.div`
  font-size: 0.3em;
`;
const Icon = styled.i``;
const Active = {
  background: "#111"
};
const SOPside = styled.div`
  position: fixed;
  left: 180px;
  top: 80px;
`;

export default class SOPForm extends Component {
  render() {
    return (
        <SOPwrapper>
    <SOPNavbar>
      <SOPNavbarlist>
        <Icon className="fa fa-leaf" />
      </SOPNavbarlist>
      <SOPNavbarlist style={Active}>
        <Icon className="fa fa-user" />
        <br />
        <Sopcontent>One</Sopcontent>
      </SOPNavbarlist>
      <SOPNavbarlist>
        <Icon className="fa fa-archive" />
        <br /> <Sopcontent>One</Sopcontent>
      </SOPNavbarlist>
      <SOPNavbarlist>
        <Icon className="fa fa-users" />
        <br /> <Sopcontent>One</Sopcontent>
      </SOPNavbarlist>
      <SOPNavbarlist>
        <Icon className="fa fa-magnet" />
        <br /> <Sopcontent>One</Sopcontent>
      </SOPNavbarlist>
    </SOPNavbar>
    
    <LoginWrapper >
        <FormWrapper>
        <div>
          <input
            type="text"
            id="name"
            placeholder="SOP Name"
            className="FormField__Input"
            name="name"
          />
        </div>
        <div>
          <input
            type="text"
            id="name"
            placeholder="SOP Number"
            className="FormField__Input"
            name="name"
          />
        </div>
        <div>
          <select className="FormField__Input">
              <option>Select Department </option>
              </select>
              
        </div>
        <div>
          <select className="FormField__Input">
              <option>Select Request Type </option>
              </select>
              
        </div>
        <div>
          <select className="FormField__Input">
              <option>Select Sub Type </option>
              </select>
              
        </div>
        <div>
          <select className="FormField__Input">
              <option>Select Author </option>
              </select>
              
        </div>
        <div>
          <select className="FormField__Input">
              <option>Select Reviewer </option>
              <option>Reviewer A </option>
              <option>Reviewer B </option>
              <option>Reviewer C </option>
              <option>Reviewer D </option>
              </select>
              
        </div>
        <div>
          <select className="FormField__Input">
              <option>Select Approver </option>
              <option>Approver A </option>
              <option>Approver B </option>
              <option>Approver C </option>
              <option>Approver D </option>
              </select>
              
        </div>
        <div>
          <textarea placeholder="Justification" className="FormField__Input"></textarea>
              
        </div>
        

        <div className="FormField Middle">
          <Link to={ROUTES.DOC} className="FormField__Button mr-20">
            Submit Document
          </Link>
        </div>
        </FormWrapper>
      </LoginWrapper>
    
  </SOPwrapper>
      
    );
  }
}