import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <form action="">
        <label htmlFor="searchbox" />
        <input
          id="searchbox"
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          onChange={searchChange}
        />
      </form>
    </div>
  );
};

export default SearchBox;
