import DataSortManager from "./components/dataFetch/context/dataSortContextManager";
import DataFetch from "./components/dataFetch/dataFetch";

const App = () => {
  return (
    <DataSortManager>
      <div className="App">
        <DataFetch />
      </div>
    </DataSortManager>
  );
}

export default App;