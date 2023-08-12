import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import "./Header.css";

const NoteCard = (props) => {
  return (
    <div className="card text-bg-info mb-3" style={{ maxWidth: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title"> {props.title} </h5>
        <p className="card-text"> {props.text} </p>
        <span className="add-icon-container">
          <IconButton
            aria-label="add"
            size="large"
            style={{color:"#ff4569"}}
            onClick={props.deleteNote}
          >
            <DeleteIcon fontSize="large" />
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default NoteCard;
