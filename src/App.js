  import GetAllStudents from "./Components/GetAllStudents";
  function App() {
    const myname = "Pradnya";

    return (
      <>
        {myname}
        <GetAllStudents className="form-control" />
      </>
    );
  }

  export default App;
