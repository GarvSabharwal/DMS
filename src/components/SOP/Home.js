import React from "react";
import "../Home/bootstrap.min.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
const divStyle = {
  border: "5px solid grey"
};
const buttonStyle = {
  float: "right",
  margin:'0px 0px 50px 20px'
};

const SOPHome = () => (
  <div>
    <div>
      <h2>Dashboard <div className="FormField Middle" style={buttonStyle}>
          <Link to={ROUTES.DOC} className="FormField__Button mr-20">
            Upload Document
          </Link>
        </div></h2> 
    </div>
    <div className="container " style={divStyle}>
      <h5>Panel Heading</h5>
      <hr />
      <div className="panel panel-default">
        <div className="panel-heading">Panel Heading
        
        </div>
        <div className="panel-body">Panel Content</div>
      </div>
      <div>
        </div>
    </div>
  </div>
);

export default SOPHome;
