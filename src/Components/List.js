import React from "react";
import ListItem from "./ListItem";

const List = props => {
  return (
    <div className="container container_style">
      <div className="row">
        {props.UsersProps.map((user, id) => (
          <ListItem key={id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default List;
