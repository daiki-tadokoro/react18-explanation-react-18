import { useState } from "react";
import { Avatar } from "./Avatar";
import { TaskList } from "./TaskList";

export type Task = {
  id: number;
  title: string;
  assingnee: string;
};

const member = {
  a: "A",
  b: "B",
  c: "C",
};

const generateDummyTasks = (): Task[] => {
  return Array(10000)
    .fill("")
    .map((_, index) => {
      const addedIndex = index + 1;
      return {
        id: addedIndex,
        title: `タスク${addedIndex}`,
        assingnee:
          addedIndex % 3 === 0
            ? member.a
            : addedIndex % 2 === 0
            ? member.b
            : member.c,
      };
    });
};

const tasks = generateDummyTasks();

const filteringAssignee = (assignee: string) => {
  if (assignee === "") return tasks;
  return tasks.filter((task) => task.assingnee === assignee);
};

export const Transition = () => {
  const [selectedAssingnee, setSelectedAssingnee] = useState<string>("");
  const [taskList, setTaskList] = useState<Task[]>(tasks);

  const onClickAssignee = (assignee: string) => {
    setSelectedAssingnee(assignee);

    setTaskList(filteringAssignee(assignee));
  };

  return (
    <div>
      <p>transition</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Avatar
          children={member.a}
          isSelected={selectedAssingnee === member.a}
          onClick={onClickAssignee}
        />
        <Avatar
          children={member.b}
          isSelected={selectedAssingnee === member.b}
          onClick={onClickAssignee}
        />
        <Avatar
          children={member.c}
          isSelected={selectedAssingnee === member.c}
          onClick={onClickAssignee}
        />
      </div>
      <br />
      <button
        onClick={() => {
          onClickAssignee("");
        }}
      >
        リセット
      </button>

      <TaskList taskList={taskList} />
    </div>
  );
};
