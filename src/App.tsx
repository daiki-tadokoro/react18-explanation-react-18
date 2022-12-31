import "./App.css";
import { ReactQuery } from "./components/ReactQuery";
import { Transition } from "./components/Transition";
// import { AutoBatchEventHandler } from "./components/AutoBatchEventHandler";
// import { AutoBatchOther } from "./components/AutoBatchOther";

function App() {
  return (
    <div className="App">
      {/* <AutoBatchEventHandler />
      <AutoBatchOther /> */}
      <Transition />
      <hr />
      <ReactQuery />
    </div>
  );
}

export default App;
