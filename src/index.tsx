import React from "react";
import { render } from "react-dom";
import { Root } from "./Root";
import { extensions } from "./extensions/extensions";
import "./index.css";

const rootElement = document.getElementById("root");

extensions();

render(<Root />, rootElement);
