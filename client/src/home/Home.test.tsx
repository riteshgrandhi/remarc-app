import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import { Logger, LogLevel } from "@common";
import AuthService from "../services/AuthService";
import ApiService from "../services/ApiService";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const logger = new Logger(LogLevel.VERBOSE);
  const authService = new AuthService(logger);
  const apiService = new ApiService(logger, authService);
  ReactDOM.render(
    <Home marcs={[]} logger={logger} apiService={apiService} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
