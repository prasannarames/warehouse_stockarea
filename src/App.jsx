import "./App.css";
import Filter from "./components/Filter/Filter";
import ListPage from "./components/ListPage/ListPage";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <header>WAREHOUSES DATABASE</header>
      <Search />
      <Filter />
      <ListPage />
    </div>
  );
}

export default App;
