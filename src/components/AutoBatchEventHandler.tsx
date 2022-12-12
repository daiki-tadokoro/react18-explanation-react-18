import { useState } from "react";
import { flushSync } from "react-dom";

export const AutoBatchEventHandler = () => {
  console.log("AutoBatchEventHandler");
  const [state1, setState1] = useState<number>(0);
  const [state2, setState2] = useState<number>(0);

  const onClickUpdateButton = () => {
    console.log("state1", state1);
    flushSync(() => {
      setState1((state1) => state1 + 1);
    });
    setState1((state1) => state1 + 1);
    console.log("state1", state1);
    setState2((state2) => state2 + 1);
  };
  console.log("レンダリング後", state1);

  return (
    <div>
      <p>Automatic Batching 確認用（イベントハンドラ）</p>
      <button onClick={onClickUpdateButton}>State更新！</button>
      <p>State: {state1}</p>
      <p>State: {state2}</p>
    </div>
  );
};
