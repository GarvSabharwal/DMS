import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import HomePage from "../Home";
import SOPPage from "../SOP";
import LoginPage from "../Login";
import DOCView from "../DocumentViewer/Doc";

import * as ROUTES from "../../constants/routes";

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.LOGIN} component={LoginPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SOP_HOME} component={SOPPage} />
      <Route path={ROUTES.DOC} component={DOCView} />
    </div>
  </Router>
);

export default App;
