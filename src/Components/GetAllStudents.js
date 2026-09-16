import "../App.css";
function GetAllStudents() {
  const myname = "Pradnya";
  const myStyle = {
    textAlign: "center",
    fontSize: "30px",
    marginTop: "20px",
    color: "#d24587",
    textDecoration: "underline",
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
  };

  const fruitsArray = ["Apple", "Banana", "Mango", "Grapes"];
  const fruitObject = { name: "Apple", color: "Red", price: 100 };
  function getFruits() {
    return (
      <ol>
        {fruitsArray.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ol>
    );
  }
  function getFruitDetails() {
    return (
      <div>
        <h3>Fruit Details:</h3>
        <p>Name: {fruitObject.name}</p>
        <p>Color: {fruitObject.color}</p>
        <p>Price: ${fruitObject.price}</p>
      </div>
    );
  }

  function getName() {
    return "Harshal";
  }
  return (
    <>
      <div style={myStyle}>
        Student Management System {myname + " "}
        {getName()}
      </div>
      <button onClick={() => window.confirm("he loves you!!!!!")}>
        My button
      </button>
      <br />
      <input
        type="text"
        className="form-control"
        onMouseClick={() => alert("You have changed the value")}
        placeholder="Enter your name"
      />
      {getFruits()}
      {getFruitDetails()}
    </>
  );
}

export default GetAllStudents;
