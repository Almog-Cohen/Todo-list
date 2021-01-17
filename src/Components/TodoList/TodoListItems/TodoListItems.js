import React, { useState } from "react";
import "./TodoListItems.css";
import ActionMenu from "./ActionMenu";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoListItems = ({ id, task, description, done, onRemove }) => {
  const [checkbox, setCheckbox] = useState(done);
  const [taskName, setTaskName] = useState(task);
  const [taskDescription, setTaskDescription] = useState(description);
  const [isEditMode, setIsEditMode] = useState(false);
  const [textForm, setTextForm] = useState({});

  const handleRemove = () => {
    onRemove(id);
  };

  // Set the checkbox - checked/unchecked
  const handleComplete = () => {
    setCheckbox(!checkbox);
  };

  const handleRename = () => {
    setIsEditMode(true);
  };

  const handleModalSubmit = () => {
    console.log(textForm);
    if (textForm.name) {
      setTaskName(textForm.name);
    }
    if (textForm.description) {
      setTaskDescription(textForm.description);
    }
    setIsEditMode(false);
  };

  // Getting the text changes from the modal
  const onInputChange = (event) => {
    switch (event.target.name) {
      case "name":
        setTextForm({ ...textForm, name: event.target.value });
        break;
      case "description":
        setTextForm({ ...textForm, description: event.target.value });
        break;
    }
  };

  return (
    <div className="todolist-items">
      <div>
        <React.Fragment>
          <Typography className="task-name">{taskName}</Typography>
          {taskDescription}
        </React.Fragment>
      </div>

      <div className="todo-icons">
        <Checkbox
          defaultChecked
          checked={checkbox}
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <ActionMenu
          onComplete={handleComplete}
          onRemove={handleRemove}
          onRename={handleRename}
        />
      </div>

      {/* Open Modal for updating a specific */}
      <Modal show={isEditMode} onHide={() => setIsEditMode(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editing {taskName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TextField
            id="standard-basic"
            name="name"
            className="text-field"
            label="Task"
            defaultValue={taskName}
            onChange={onInputChange}
          />
          <br />
          <TextField
            id="standard-basic"
            name="description"
            label="Description"
            defaultValue={taskDescription}
            onChange={onInputChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsEditMode(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleModalSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TodoListItems;
