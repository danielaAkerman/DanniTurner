import React from "react";

export function DTbutton(props) {
  console.log(props.children);

  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
}
