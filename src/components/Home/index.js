import React from "react";
import "./bootstrap-responsive.min.css";
import "./bootstrap.min.css";
import "./theme.css";
import "./font-awesome.min.css";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const notistyle = {
  border: "1px solid green"
};
const notistyler = {
  border: "1px solid red"
};
const green = {
  color: "green"
};
const red = {
  color: "red"
};

const white = {
  color: "white"
};
const Home = () => (
  <div className="wrapper">
    <div className="container">
      <div className="row">
        <div className="span3">
          <div className="sidebar">
            <div className="btn-box big span3" style={notistyle}>
              <p style={green}>CR Number :83413546</p>
              <p>Is Resolved.Click to provide your Feedback</p>
            </div>
            <div className="btn-box big span3" style={notistyle}>
              <p style={green}>CR Number :83413546</p>
              <p>Is Resolved.Click to provide your Feedback</p>
            </div>
            <div className="btn-box big span3" style={notistyle}>
              <p style={green}>CR Number :83413546</p>
              <p>Is Resolved.Click to provide your Feedback</p>
            </div>
            <div className="btn-box big span3" style={notistyler}>
              <p style={red}>CR Number :83413546</p>
              <p>Is not Resolved.Click to provide your Feedback</p>
            </div>
          </div>
        </div>
        <div className="span9">
          <div className="content">
            <div className="btn-controls">
              <div className="btn-box-row row-fluid">
                <Link to={ROUTES.SOP_HOME}>
                  <div
                    href=""
                    className="btn-box big span4"
                    style={{ background: "#2E86C1" }}
                  >
                    <i className="fa fa-user" style={white} />
                    <b style={white}>SOP</b>
                    <p className="text-muted" style={white}>
                      add new request
                    </p>
                  </div>
                </Link>
                <div
                  href=""
                  className="btn-box big span4"
                  style={{ background: "#148F77" }}
                >
                  <i className="fa fa-file-text" style={white} />
                  <b style={white}>App1</b>
                  <p className="text-muted" style={white}>
                    add something
                  </p>
                </div>
                <div
                  href=""
                  className="btn-box big span4"
                  style={{ background: "#B03A2E" }}
                >
                  <i className=" fa fa-file-text-o" style={white} />
                  <b style={white}>App2</b>
                  <p className="text-muted" style={white}>
                    add something
                  </p>
                </div>
              </div>
              <div className="btn-box-row row-fluid">
                <div className="span8">
                  <div className="row-fluid">
                    <div className="span12">
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#85C1E9" }}
                      >
                        <i className="fa fa-file-text" style={white} />
                        <b style={white}>something</b>
                      </div>
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#F1C40F" }}
                      >
                        <i className="fa fa-file-text" style={white} />
                        <b style={white}>something</b>
                      </div>
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#E59866" }}
                      >
                        <i className="fa fa-file-text" style={white} />
                        <b style={white}>something</b>
                      </div>
                    </div>
                  </div>
                  <div className="row-fluid">
                    <div className="span12">
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#85929E" }}
                      >
                        <i className="fa fa-file-text" style={white} />
                        <b style={white}>something</b>
                      </div>
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#DC7633" }}
                      >
                        <i className="fa fa-file-text" style={white} />
                        <b style={white}>something</b>
                      </div>
                      <div
                        href=""
                        className="btn-box small span4"
                        style={{ background: "#D2B4DE" }}
                      >
                        <i className="fa fa-file-text" style={white} />
                        <b style={white}>Bounce something</b>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
