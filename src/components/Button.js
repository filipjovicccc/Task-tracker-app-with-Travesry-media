import React from "react";

function Button({ color, title, onClick }) {
  //   onClick = (e) => console.log(e.target.value);
  return (
    <div
      style={{ backgroundColor: color }}
      title={title}
      className="btn"
      onClick={onClick}
    >
      {title}
    </div>
  );
}

export default Button;
