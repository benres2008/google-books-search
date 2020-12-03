import React from "react";

function SaveBtn(props) {
  return (
    <button
      className="save-btn"
      {...props}
      role="button"
      tabIndex="0"
    >
      <i className="icon-save"></i>
    </button>
  );
}

export default SaveBtn;