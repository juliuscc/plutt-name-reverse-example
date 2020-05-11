import React from "react";

const reverseString = (str: string) =>
  str
    .split("")
    .reverse()
    .join("");

export default ({ name }: { name: string }) => (
  <div
    style={{
      fontSize: "25px",
      border: "solid 3px black",
      padding: "10px",
      margin: "10px",
    }}
  >
    Your name in reverse is:{" "}
    <span style={{ background: "coral", padding: "0 10px" }}>
      {reverseString(name)}
    </span>
  </div>
);
