import React, { useState } from "react";
import "./TodoList.css";
import TodoListItems from "./TodoListItems/TodoListItems";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";

const listItems = [
  { id: 1, task: "Do homework", description: "Homework in math", done: true },
  { id: 2, task: "Do homework", description: "Homework in math", done: true },
  { id: 3, task: "Do homework", description: "Homework in math", done: true },
  { id: 4, task: "Do homework", description: "Homework in math", done: true },
];

const TodoList = () => {
  const [list, setList] = useState(listItems);
  const [taskInput, setTaskInput] = useState("");

  // Task input text
  const onInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Remove item from the list
  const handleRemove = (id) => {
    const removedArr = [...list].filter((item) => item.id !== id);
    setList(removedArr);
  };

  // Add new item to the list
  const addListItem = () => {
    setList([
      ...list,
      {
        id: new Date(),
        task: taskInput,
        description: "Please fill in description",
        done: false,
      },
    ]);
  };

  return (
    <Card className="todolist">
      <CardContent>
        <div className="todolist-header">
          <h1>TrustPeers Todo List Example</h1>
        </div>
        {list?.map((listItem) => (
          <TodoListItems
            key={listItem.id}
            id={listItem.id}
            task={listItem.task}
            description={listItem.description}
            done={listItem.done}
            onRemove={handleRemove}
          />
        ))}

        <div>
          <IconButton aria-label="action" color="primary" onClick={addListItem}>
            <AddIcon fontSize="large" />
          </IconButton>
          <TextField
            id="standard-basic"
            name="name"
            className="text-field"
            label="Add a new task"
            defaultValue={taskInput}
            onChange={onInputChange}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoList;
