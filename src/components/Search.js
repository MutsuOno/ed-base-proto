import React, { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
  };

  return (
    <form className="search">
      <input
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="キーワードを入力（例：zoom）"
      />

      <input onClick={callSearchFunction} type="submit" value="検索" />
    </form>
  );
};

export default Search;
