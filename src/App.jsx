import "./App.css";

import ListPage from "./components/ListPage/ListPage";

import { Route, Routes } from "react-router-dom";
import WarehouseDetail from "./components/WarehouseDetailPage/WarehouseDetail";

function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/item/:itemId" element={<WarehouseDetail />} />
      </Routes>
    </div>
  );
}

export default App;
