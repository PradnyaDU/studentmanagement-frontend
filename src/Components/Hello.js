import { useState } from "react";

export default function Hello({
  names = ["World"],
  age = 0,
  city = "Unknown",
  label,
  func,
}) {
  const [count, SetCount] = useState(0);
  function handleClick() {
    SetCount(count + 1);
  }
  return (
    <>
      <h1>
        Hello, {names}! You are {age} years old and live in {city}.
      </h1>
      {/* <h1>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </h1> */}
      <div>
        <button onClick={() => alert(func())}>{label}</button>
        <br></br>
        <button onClick={handleClick}>Click me</button>
        <p>Count is : {count}</p>
      </div>
    </>
  );
}
