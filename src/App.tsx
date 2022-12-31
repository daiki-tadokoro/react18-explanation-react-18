import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
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

      <ErrorBoundary fallback={<p>エラーだよー</p>}>
        <Suspense fallback={<p>ローディング中だよー</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
