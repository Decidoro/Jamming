import React from "react";

function Searchbar() {
  return (
    <form>
      <label>
        Search Music:
        <input
          type="text"
          name="search"
        />
      </label>
    </form>
  );
}

export default Searchbar;
