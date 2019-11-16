import React from "react";

const Button = props => {
  return (
    <button className="btn btn-default btn-primary" onClick={props.ButtonEvent}>
      load more
    </button>
  );
};

export default Button;
