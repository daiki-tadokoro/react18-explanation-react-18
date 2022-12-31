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

      <ErrorBoundary fallback={<p>全体エラーだよー</p>}>
        <Suspense fallback={<p>全体ローディング中だよー</p>}>
          <ReactQuery />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
