import { useEffect, useState } from "react";

export default function UseEffectHandsOn() {
  const [name, setName] = useState("Pradnya");

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Component re-rendered !! ${count}`);
  }, [name]);
  return (
    <>
      <p onClick={() => setName(name === "Harshal" ? "Pradnya" : "Harshal")}>
        {" "}
        Name is: {name}
      </p>

      <p> Count is: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
