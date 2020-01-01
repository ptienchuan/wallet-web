import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.headers.common["Authorization"] =
	"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTAzMjMzNTBlYTgxNTIyZWNhZjRkZGYiLCJpYXQiOjE1Nzc4OTM3ODksImV4cCI6MTU3Nzk4MDE4OX0.sgkgwy72O1Ic_fqwIQdcJr_VADSvAlzbHYTJE1XJgs0";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
