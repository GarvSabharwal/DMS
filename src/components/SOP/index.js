import React from "react";
import styled from "styled-components";
import "../Home/font-awesome.min.css";
import SOPHome from "./Home";
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
const SOP = () => (
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
    <SOPside>
      <SOPHome />
    </SOPside>
  </SOPwrapper>
);

export default SOP;
