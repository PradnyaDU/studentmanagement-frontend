import { useState, useEffect } from "react";

export default function StateLifting() {
  const [Text, setText] = useState("");
  return (
    <>
      {" "}
      <StateLiftingChild onChange={setText}></StateLiftingChild>
      <SharedState Text={Text}></SharedState>
    </>
  );
}

function StateLiftingChild({ onChange }) {
  return (
    <>
      <input type="text" onChange={(e) => onChange(e.target.value)} />
    </>
  );
}

function SharedState({ Text }) {
  useEffect(() => {
    localStorage.setItem("Text", Text);
  }, [Text]);

  return (
    <>
      <h2>{localStorage.getItem("Text")}</h2>
    </>
  );
}
