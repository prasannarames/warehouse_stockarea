import { useContext, useEffect } from "react";
import warehouseData from "../../data/warehouse.json";
import "./ListPage.css";
import Filter from "./../Filter/Filter";
import Search from "./../Search/Search";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/appContext";
const ListPage = () => {
  const {
    changeSearchedData,
    searchedData,
    search,
    filteredItem,
    filteredList,
    getFilteredList,
  } = useContext(AppContext);

  useEffect(() => {
    changeSearchedData();
  }, [search]);
  useEffect(() => {
    getFilteredList();
  }, [filteredItem]);
  return (
    <div>
      <header>WAREHOUSES DATABASE</header>
      <Search />
      <Filter />
      <div className="list-page">
        <table className="list-table">
          <thead className="list-table--head">
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CODE</th>
              <th>CITY</th>
              <th>SPACE</th>
              <th>TYPE</th>
              <th>CLUSTER</th>
              <th>REGISTERED</th>
              <th>LIVE</th>
            </tr>
          </thead>
          {search && (
            <tbody>
              {searchedData.map((listData, i) => (
                <tr key={i}>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.id}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.name}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.code}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.city}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.space_available}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.type}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.cluster}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>{`${
                      listData.is_registered ? "Yes" : "No"
                    }`}</Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>{`${
                      listData.is_live ? "Yes" : "No"
                    }`}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
          {filteredItem ? (
            <tbody>
              {filteredList.map((listData, i) => (
                <tr key={i}>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.id}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.name}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.code}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.city}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.space_available}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.type}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.cluster}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>{`${
                      listData.is_registered ? "Yes" : "No"
                    }`}</Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>{`${
                      listData.is_live ? "Yes" : "No"
                    }`}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {warehouseData.map((listData, i) => (
                <tr key={i}>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.id}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.name}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.code}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.city}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.space_available}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.type}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>
                      {listData.cluster}
                    </Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>{`${
                      listData.is_registered ? "Yes" : "No"
                    }`}</Link>
                  </td>
                  <td>
                    <Link className="link" to={`/item/${listData.id}`}>{`${
                      listData.is_live ? "Yes" : "No"
                    }`}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default ListPage;
