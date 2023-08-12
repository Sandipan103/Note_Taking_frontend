import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import CreateNote from "./CreateNote";
import NoteCard from "./NoteCard";

const Notes = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [arr, setArr] = useState([]);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  const changeText = (event) => {
    setText(event.target.value);
  };

  const update = () => {
    if (title === "") {
      alert("please add title");
      return;
    }
    if (text === "") {
      alert("please add text");
      return;
    }
    setArr((pre) => {
      const temp = { title, text };
      const newArr = [...pre, temp];
      return newArr;
    });
    setTitle("");
    setText("");
  };

  const deleteNote = (index) => {
    setArr((pre) => {
      const newArr = [...pre];
      newArr.splice(index, 1);
      return newArr;
    });
  };

  return (
    <>
      <CreateNote
        title={title}
        changeTitle={changeTitle}
        text={text}
        changeText={changeText}
        update={update}
      />
      <br />
      <div className="container">
        <div className="row">
          {arr.map((val, index) => (
            <div
              className="col-md-4 mx-auto justify-content-around"
              key={index}
            >
              <NoteCard
                title={val.title}
                text={val.text}
                deleteNote={() => deleteNote(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Notes;
