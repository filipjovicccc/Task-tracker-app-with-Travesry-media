import React from "react";
import Button from "./Button";

function Header({ title, onAdd, showAdd }) {
  const onClick = () => {
    console.log("click");
  };
  return (
    <header>
      <Button
        color={showAdd ? "red" : "green"}
        title={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
      <h3>{title}</h3>

      <Button color="green" title="okay" onClick={onClick} />
      <Button color="red" title="goodJob" />
      <Button color="blue" title="new" />
      <Button color="orange" title="run" />
    </header>
  );
}

export default Header;
