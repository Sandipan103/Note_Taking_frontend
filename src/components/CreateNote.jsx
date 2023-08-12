import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const CreateNote = (props) => {
  return (
    <div className="card-container">
      <div className="card c1">
        <div className="card-body">
          <h5 className="card-title">
            <TextField
              value={props.title}
              onChange={props.changeTitle}
              label="Title"
              variant="standard"
              color="secondary"
              focused
            />
          </h5>
          <p className="card-text">
            <TextField
              value={props.text}
              onChange={props.changeText}
              label="Note"
              placeholder="text"
              multiline
            />
          </p>

          <Stack
            direction="row"
            alignItems="end"
            justifyContent="end"
            spacing={1}
          >
            <div className="add-icon-container">
              <IconButton
                aria-label="add"
                size="large"
                color="success"
                onClick={props.update}
              >
                <AddCircleIcon fontSize="large" />
              </IconButton>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
