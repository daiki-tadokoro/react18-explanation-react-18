import { Suspense, useState, useTransition } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { AlbamList } from "./AlbamList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";

type Tabs = "todo" | "albam";

export const ReactQuery = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("todo");
  const [isPending, startTransition] = useTransition();
  const buttonStyle = {
    padding: "12px",
    fontSize: "16px",
    border: "none",
    opacity: isPending ? 0.5 : 1,
  };
  const albamButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === "albam" ? "royalblue" : "whites",
    color: selectedTab === "albam" ? "white" : "black",
  };

  const todoButtonStyle = {
    ...buttonStyle,
    backgroundColor: selectedTab === "todo" ? "royalblue" : "whites",
    color: selectedTab === "todo" ? "white" : "black",
  };

  const onClickTabButton = (tab: Tabs) => {
    startTransition(() => {
      setSelectedTab(tab);
    });
  };
  return (
    <div style={{ display: "flex", padding: "16px" }}>
      <Sidebar />
      <div style={{ flexGrow: 1 }}>
        <button
          style={todoButtonStyle}
          onClick={() => {
            onClickTabButton("todo");
          }}
        >
          Todo
        </button>
        <button
          style={albamButtonStyle}
          onClick={() => {
            onClickTabButton("albam");
          }}
        >
          Albam
        </button>
        <ErrorBoundary fallback={<p>Todos or AlbamList エラーだよー</p>}>
          <Suspense fallback={<p>Todos or AlbamList ローディング中だよー</p>}>
            {selectedTab === "todo" ? <TodoList /> : <AlbamList />}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};
