import React, { useState } from "react";
import warehouseData from "../../src/data/warehouse.json";

const AppContext = React.createContext();

const AppContextProvider = (props) => {
  // search
  const [search, setSearch] = useState("");
  const [searchedData, setSearchedData] = useState([]);
  // filter
  const [filteredList, setFilteredList] = useState([]);
  const [filteredItem, setFilteredItem] = useState("");

  // search
  function changeSearch(newSearch) {
    setSearch(newSearch);
  }
  // search
  function changeSearchedData() {
    const searchResults = warehouseData.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );

    setSearchedData(searchResults);
  }

  // filter

  function getFilteredList() {
    const filterResults = warehouseData.filter(
      (item) =>
        item.city === filteredItem ||
        item.cluster === filteredItem ||
        item.space_available.toString() === filteredItem
    );

    setFilteredList(filterResults);
  }

  function handleItemChange(e) {
    setFilteredItem(e.target.value);
  }

  function resetFilter(){
    setFilteredItem("")

  }

  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        searchedData,
        setSearchedData,
        changeSearch,
        changeSearchedData,
        filteredItem,
        filteredList,
        setFilteredItem,
        setFilteredList,
        getFilteredList,
        handleItemChange,
        warehouseData,
        resetFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
