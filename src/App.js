import GetAllStudents from "./Components/GetAllStudents";
import "./Components/Hello";
import { useState } from "react";
import Hello from "./Components/Hello";
import FormHandling from "./Components/FormHandling";
export default function App() {
  const myname = ["Harshal", "Pradnya", "Rutuja", "Sanket"];

  const [name, setName] = useState("");
  const [student, setStudent] = useState({
    stuname: "Pradnya",
    stuage: 23,
    stucity: "Pune",
  });

  function HelloMessage() {
    return "Hello This is HelloMessage function";
  }

  function changeStudent(name, age, city) {
    setStudent({ stuname: name, stuage: age, stucity: city });
  }
  return (
    <>
      {/* {myname} */}
      {/* <GetAllStudents className="form-control" /> */}
      {/* <Hello
        names={myname}
        age={25}
        city="New York"
        label="This is my label"
        func={HelloMessage}
      />
      <br />
      <button
        onClick={() => setName(name === "Pradnya" ? "Harshal" : "Pradnya")}
      >
        Click me 😉
      </button>{" "}
      <br />
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <p> name is : {name}</p>
      <button onClick={() => changeStudent("Harshal", 24, "Mumbai")}>
        Change Student
      </button>
      <p>
        Name: {student.stuname}
        <br />
        Age: {student.stuage}
        <br />
        City: {student.stucity}
      </p> */}

      <FormHandling></FormHandling>
    </>
  );
}
