import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
// import { addTodo } from "../actions";
// dispatch actions and create a component
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Task = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  function addNewTask() {
    const task = inputRef.current.value.trim();
    if (task !== "") {
      dispatch(addTodo(task));
      inputRef.current.value = "";
    }
  }
  return (
    <div className="task-component">
      <div className="add-task">
        {/* <input
          type="text"
          placeholder="Add task here..."
          ref={inputRef}
          className="taskInput"
        />
        <button onClick={addNewTask}>Add Task</button> */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            inputRef={inputRef}
            label="Add task here..."
            variant="outlined"
            size="small"
          />
          <Button variant="contained" onClick={addNewTask}>
            Add Task
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Task;
