import { Link, useParams } from "react-router-dom";
import warehouseData from "../../data/warehouse.json";
import "./WarehouseDetail.css";

const WarehouseDetail = () => {
  const { itemId } = useParams();

  const selectedItem = warehouseData.find(
    (item) => item.id === parseInt(itemId)
  );

  return (
    <div>
      <h2 className="arrow">
        <Link className="link" to="/">&larr; Home</Link>
      </h2>
      <div className="detail-card">
        <h1>Warehouse Details</h1>
        <div className="detail-text">
          <p>Warehouse Name : {selectedItem.name}</p>
          <p>Warehouse CODE : {selectedItem.code}</p>
          <p>Location : {selectedItem.city}</p>
          <p>Availble_space : {selectedItem.space_available}</p>
          <p>Warehouse Type : {selectedItem.type}</p>
          <p>Cluster : {selectedItem.cluster}</p>
          <p>
            Registered_warehouse : {selectedItem.is_registered ? "Yes" : "No"}
          </p>
          <p>Live_status : {selectedItem.is_live ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
};

export default WarehouseDetail;
