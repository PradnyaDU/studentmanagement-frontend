import { useState } from "react";

export default function StateLifting() {
  const [Text, setText] = useState("");
  return (
    <>
      {" "}
      <StateLiftingChild onChange={setText}></StateLiftingChild> <h2>{Text}</h2>
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
