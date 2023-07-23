import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import "./Search.css";

const Search = () => {
  const { search, changeSearch } = useContext(AppContext);

  return (
    <>
      <div className="search-bar">
        <input
          className="search-box"
          type="text"
          onChange={(e) => changeSearch(e.target.value)}
          placeholder="Search here"
          value={search}
        />
      </div>
    </>
  );
};

export default Search;
