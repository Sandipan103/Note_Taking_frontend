import * as React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";

const Header = () => {
  return (
    <div className="Title">
      <div className="card-header m-2 p-2">
        <pre> 📓  Keep Notes  <SpeakerNotesIcon/></pre>
      </div>
    </div>
  );
};

export default Header;
