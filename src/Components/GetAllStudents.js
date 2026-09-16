import "../App.css";
function GetAllStudents() {
  const myname = "Pradnya";
    const myStyle = { textAlign: "center", fontSize: "30px", marginTop: "20px" ,color: "#d24587", textDecoration: "underline bold", fontFamily: "Arial, sans-serif",  fontWeight: "bold",
 };

  return (
    <>
      <div style={myStyle}>Student Management System {myname}</div>
    </>
  );
}

export default GetAllStudents;
