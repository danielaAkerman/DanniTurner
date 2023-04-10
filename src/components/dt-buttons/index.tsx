import React from "react";

export function DTbutton(props) {
  console.log(props.children);

  return (
    <div>
      <button style={{ backgroundColor: "#FCA14C", border: "none" }}>
        {props.children}
      </button>
    </div>
  );
}
