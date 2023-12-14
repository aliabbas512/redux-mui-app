import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
// import { deleteTodo } from "../actions";
// dispatch actions and create a component
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskList = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="tasklist">
      <div className="display-tasks">
        {/* <h3>Your Tasks:</h3>
        <ul className="tasks">
          {tasks && Array.isArray(tasks) && tasks.map((task) => {
            return(
            <li className="task" key={task.id}>
              {task.text}
              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                delete
              </button>
            </li>
            );
          })}
        </ul> */}
        <Typography variant="h5">Your Tasks:</Typography>
        <List>
          {tasks &&
            Array.isArray(tasks) &&
            tasks.map((task) => (
              <ListItem key={task.id}>
                <ListItemText
                  primary={task.text}
                  sx={{ paddingLeft: "120px" }}
                />
                <ListItemSecondaryAction sx={{ paddingRight: "880px" }}>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleDelete(task.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
        </List>
      </div>
    </div>
  );
};

export default TaskList;
