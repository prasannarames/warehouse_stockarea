import { useState } from "react";

import warehouseData from "../../data/warehouse.json";

const Search = () => {
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  function changeSearch(newSearch) {
    setSearch(newSearch);
  }

  function changeSearchedData() {
    const searchResults = warehouseData.filter(
      (data) =>
        data.name.toLowerCase().includes(search.toLowerCase()) ||
        data.gender.toLowerCase().includes(search.toLowerCase())
    );

    setSearchedData(searchResults);
  }

  

  return (
    <>
      <div>
        <input
          className="search-box"
          type="text"
          onChange={(e) => changeSearch(e.target.value)}
          placeholder="Search by the name, type, color ... "
          value={search}
        />
      </div>
    </>
  );
};

export default Search;
