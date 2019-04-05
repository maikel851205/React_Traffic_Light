//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/index.scss";

import TrafficLight from "./component/TrafficLight.jsx";

//import your own components
//import { Home } from "./component/home.jsx";

//render your react application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
