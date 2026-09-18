import GetAllStudents from "./Components/GetAllStudents";
import "./Components/Hello";
import Hello from "./Components/Hello";
export default function App() {
  const myname = ["Harshal", "Pradnya", "Rutuja", "Sanket"];
  function HelloMessage() {
    return "Hello This is HelloMessage function";
  }
  return (
    <>
      {/* {myname} */}
      {/* <GetAllStudents className="form-control" /> */}
      <Hello names={myname} age={25} city="New York" />
      <Hello label="This is my label" func={HelloMessage} />
    </>
  );
}
