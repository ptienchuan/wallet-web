import React from "react";

import classes from "./Body.module.css";

const body = props => <div className={classes.Body}>{props.children}</div>;

export default body;
