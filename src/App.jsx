import "./App.css";

import ListPage from "./components/ListPage/ListPage";
import Search from "./components/Search/Search";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("./data/warehouse.json")
  //     .then((res) => setData(res))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <header>WAREHOUSES DATABASE</header>
      <Search />
      <ListPage />
    </div>
  );
}

export default App;
