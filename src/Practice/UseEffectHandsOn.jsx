import { useEffect, useState } from "react";

export default function UseEffectHandsOn() {
  const [name, setName] = useState("Pradnya");
  const [seconds, setSeconds] = useState(0);

  //   const [count, setCount] =    useState(0);

  //   useEffect(() => {
  //     document.title = `Count : ${count}`;
  //     console.log(`Component re-rendered !! ${count}`);
  //   }, [count]);

  useEffect(() => {
    debugger;
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <p onClick={() => setName(name === "Harshal" ? "Pradnya" : "Harshal")}>
        {" "}
        Name is: {name}
      </p>

      <p> Time is: {seconds}</p>
      {/* <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount(0)}>Reset</button> */}
    </>
  );
}
