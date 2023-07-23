import { useContext } from "react";
import { AppContext } from "../../context/appContext";
import warehouseData from "../../data/warehouse.json";
import "./Filter.css";

const Filter = () => {
  const { handleItemChange, resetFilter } = useContext(AppContext);

  return (
    <>
      <div className="filter-container">
        <div>
          <select className="filter-box" onChange={(e) => handleItemChange(e)}>
            <option value="">All city</option>
            <option value="Delhi">Delhi</option>
            <option value="Chennai">Chennai</option>
            <option value="Indore">Indore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Guwahati">Guwahati</option>
          </select>
        </div>
        <div>
          <select className="filter-box" onChange={(e) => handleItemChange(e)}>
            <option value="">All cluster</option>
            <option value="cluster-a-1">cluster-a-1</option>
            <option value="cluster-a-2">cluster-a-2</option>
            <option value="cluster-v-2">cluster-v-2</option>
            <option value="cluster-a-21">cluster-a-21</option>
            <option value="cluster-a-32">cluster-a-32</option>
          </select>
        </div>
        <div>
          <select className="filter-box" onChange={(e) => handleItemChange(e)}>
            <option value="">Space</option>
            {warehouseData.map((ele, i) => (
              <option key={i} value={ele.space_available}>
                {ele.space_available}
              </option>
            ))}
          </select>
        </div>
        <button onClick={resetFilter}>RESET FILTER</button>
      </div>
    </>
  );
};

export default Filter;
