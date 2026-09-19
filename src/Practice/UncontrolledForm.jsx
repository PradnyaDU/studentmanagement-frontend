import { useRef } from "react";

export default function UncontrolledForm() {
  const nameRef = useRef(null);
  const ageRef = useRef(null);
  const cityRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name = ", nameRef.current.value);
    console.log("Age = ", ageRef.current.value);
    console.log("City = ", cityRef.current.value);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Student Details</h2>

        <p>
          <label>Name</label>
          <br />
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Enter your name"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          />
        </p>

        <p>
          <label>Age</label>
          <br />
          <input
            ref={ageRef}

            type="number"
            name="age"
            placeholder="Enter your age"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          />
        </p>

        <p>
          <label>City</label>
          <br />
          <input
            ref={cityRef}

            type="text"
            name="city"
            placeholder="Enter your city"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          />
        </p>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
