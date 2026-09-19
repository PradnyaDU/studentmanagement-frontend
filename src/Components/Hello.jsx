import { useState } from "react";

export default function Hello({
  names = ["World"],
  age = 0,
  city = "Unknown",
  label,
  func,
}) {
  //   function handleClick() {
  //     SetName("Harshal");
  //   }
  return (
    <>
      {/* <h1>
        Hello, {names}! You are {age} years old and live in {city}.
      </h1> */}
      <h1>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </h1>{" "}
      <div>
        {func && <button onClick={() => alert(func())}>{label}</button>}
        <br></br>
      </div>
    </>
  );
}
