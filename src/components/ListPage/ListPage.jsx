import { useContext, useEffect } from "react";
import warehouseData from "../../data/warehouse.json";
import "./ListPage.css";
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
                <td>{listData.id}</td>
                <td>{listData.name}</td>
                <td>{listData.code}</td>
                <td>{listData.city}</td>
                <td>{listData.space_available}</td>
                <td>{listData.type}</td>
                <td>{listData.cluster}</td>
                <td>{`${listData.is_registered ? "Yes" : "No"}`}</td>
                <td>{`${listData.is_live ? "Yes" : "No"}`}</td>
              </tr>
            ))}
          </tbody>
        )}
        {filteredItem ? (
          <tbody>
            {filteredList.map((listData, i) => (
              <tr key={i}>
                <td>{listData.id}</td>
                <td>{listData.name}</td>
                <td>{listData.code}</td>
                <td>{listData.city}</td>
                <td>{listData.space_available}</td>
                <td>{listData.type}</td>
                <td>{listData.cluster}</td>
                <td>{`${listData.is_registered ? "Yes" : "No"}`}</td>
                <td>{`${listData.is_live ? "Yes" : "No"}`}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            {warehouseData.map((listData, i) => (
              <tr key={i}>
                <td>{listData.id}</td>
                <td>{listData.name}</td>
                <td>{listData.code}</td>
                <td>{listData.city}</td>
                <td>{listData.space_available}</td>
                <td>{listData.type}</td>
                <td>{listData.cluster}</td>
                <td>{`${listData.is_registered ? "Yes" : "No"}`}</td>
                <td>{`${listData.is_live ? "Yes" : "No"}`}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default ListPage;
