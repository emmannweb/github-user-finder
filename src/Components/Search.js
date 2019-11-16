import React from "react";

const Search = ({ SearchProps }) => {
  return (
    <div className="form-inline my-2 my-lg-0">
      <input
        onChange={SearchProps}
        className="form-control mr-sm-2"
        type="search"
        placeholder="Filter by Username"
        aria-label="Search"
      />
    </div>
  );
};

export default Search;
